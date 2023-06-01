import React from "react";
import { useRef, useEffect } from "react";
import {motion, useScroll, useTransform } from "framer-motion";

// carousel-indicators
const testimonialData = [
    { 
        description: "¡Crissel Studio Cejas y Pestañas ha transformado mi mirada por completo! Su atención al detalle y habilidades excepcionales han dejado mis cejas y pestañas impecables. Desde el primer momento, su equipo profesional me hizo sentir cómoda y segura. La calidad de los productos utilizados es insuperable, garantizando resultados duraderos. ¡Ya no puedo imaginar mi rutina diaria sin la belleza que Crissel Studio aporta a mis ojos! Recomiendo encarecidamente sus servicios a cualquiera que busque realzar su belleza natural de manera elegante y profesional. ¡No puedo esperar para volver a Crissel Studio para mi próximo tratamiento!", 
        image: "assets/images/testimonial-author1.jpg", 
        name: "Carito Llerena", 
        title: "Cliente" 
    },
    {
        description: "Crissel Studio es el destino definitivo para embellecer tus cejas y pestañas. Su equipo profesional y altamente capacitado ha transformado mi apariencia de manera sorprendente. Desde el primer momento, experimenté un servicio excepcional y atención personalizada. Cada visita es una experiencia relajante y lujosa, donde se dedican el tiempo necesario para entender mis necesidades y ofrecer los tratamientos adecuados. Con su meticulosa precisión y productos de alta calidad, lograron resaltar la belleza natural de mis cejas y realzar mis pestañas de manera espectacular. ¡Crissel Studio es el secreto mejor guardado para lucir una mirada deslumbrante!",
        image: "assets/images/testimonial-author2.jpg",
        name: "Ale Jerez",
        title: "Cliente"
    },
    {
        description: "¡Crissel Studio es simplemente increíble! Su atención y servicio personalizado para las cejas y pestañas son incomparables. Desde el primer momento que entré, me sentí bienvenida y cómoda. La profesionalidad y experiencia del equipo se nota en cada detalle. Mis cejas nunca se habían visto tan perfectas, dándole a mi rostro un marco natural y hermoso. Las extensiones de pestañas que me colocaron lucen espectaculares y realzan mi mirada de manera sorprendente. Estoy completamente satisfecha con los resultados y no dudaría en recomendar a Crissel Studio a todos mis amigos y familiares. ¡Simplemente excepcionales!",
        image: "assets/images/testimonial-author3.jpg",
        name: "Edith Carrasco",
        title: "Cliente"
    },
    { 
        description: "Crissel Studio Cejas y Pestañas ha transformado por completo mi aspecto. Su atención personalizada y profesionalismo son excepcionales. El personal experto me brindó un servicio impecable, dándome las cejas perfectas y las pestañas de mis sueños. Desde el momento en que entré, me sentí cómodo y en buenas manos. Además, la higiene y la calidad de los productos utilizados me dieron confianza total. Estoy encantado con los resultados y sin duda alguna, Crissel Studio es mi destino favorito para el cuidado de mis cejas y pestañas. ¡Recomendaría sus servicios sin dudarlo!", 
        image: "assets/images/testimonial-author4.jpg",
        name: "Dani Betancourt",
        title: "Cliente"
    },
    {
        description: "Recomiendo altamente los servicios de Crissel Studio para cejas y pestañas. Mi experiencia fue excepcional desde el principio hasta el final. El personal es amable, profesional y altamente capacitado. Me hicieron sentir cómodo y me escucharon atentamente para lograr el resultado exacto que buscaba. El resultado final superó mis expectativas: unas cejas perfectamente definidas y unas pestañas hermosas y voluminosas. El ambiente del estudio es relajante y acogedor, lo que hizo que mi experiencia fuera aún más placentera. Sin duda alguna, Crissel Studio es mi elección número uno para realzar mi mirada.",
        image: "assets/images/testimonial-author5.jpg",
        name: "Alison Andachi",
        title: "Cliente"
    },
    {
        description: "Estoy absolutamente encantada con los servicios de Crissel Studio Cejas y Pestañas. Su atención al detalle es insuperable y el resultado final es simplemente impresionante. Desde el primer momento, me sentí cómoda y en buenas manos. Su equipo de profesionales es altamente capacitado y amable, siempre dispuesto a brindar asesoramiento personalizado. Las cejas y pestañas que me han diseñado son perfectas, realzando mis rasgos faciales de manera natural. Sin duda, Crissel Studio es mi lugar de confianza para realzar mi belleza y recomendaría sus servicios a todos. ¡Gracias, Crissel Studio, por hacerme sentir más hermosa que nunca!",
        image: "assets/images/testimonial-author6.jpg",
        name: "Mayra Supe",
        title: "Cliente"
    },
];

const Testimonials = () => {

    const carouselVariants = {
        hidden: {
            opacity: 0,
            x: "-100vw",
            scale: 0.8
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                delay: 0.5,
                duration: 0.5,
                stiffness: 100
            }
        },
        exit: {
            x: "-100vw",
            transition: {
                ease: "easeInOut"
            }
        }
    }


    return (
        <section className="testimonials">
            <div className="container">
                <div className="row">
                    <div id="testimonial-slider" className="carousel slide" data-ride="carousel">
                        <motion.div 
                            className="carousel-inner" 
                            role="listbox"
                            // animate the carousel
                            variants={carouselVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            style={{
                                perspective: "1000px",
                                autoPlay: true,
                                autoPlaySpeed: 3000,
                                animationDuration: 1000,
                                animationTimingFunction: "ease-in-out",
                                animationIterationCount: "infinite",
                                transformStyle: "preserve-3d",
                                backfaceVisibility: "hidden",
                                backgroundColor: "transparent",
                                border: "none"
                                
                            }}
                            >
                            {testimonialData.map((item, index) => {
                                return (
                                    // make the first item active and loop through the array
                                    <motion.div key={index} className={`item ${index === 0 ? "active" : ""}`}>
                                        <p>{item.description}</p>
                                        <div className="carousel-caption">
                                            <img src={item.image} alt="Cliente foto para el testiomonial carousel" width="80px" height="80px" className="img-circle" />
                                            <h2>{item.name}</h2>
                                            <h4>{item.title}</h4>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                        {/* Carousel Controls */}
                        <a className="left carousel-control" href="#testimonial-slider" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a className="right carousel-control" href="#testimonial-slider" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                        {/* Carousel Indicators */}

                        <ol className="carousel-indicators">
                            {testimonialData.map((item, index) => {
                                return (
                                    <li key={index} data-target="#testimonial-slider" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
                                )
                            })}
                        </ol>
                    </div>
                </div>
            </div>
	    </section>
    )
}

export default Testimonials;


<div className="carousel-inner" role="listbox">
                            {testimonialData.map((item, index) => {
                                return (
                                    // make the first item active and loop through the array
                                    <div key={index} className={`item ${index === 0 ? "active" : ""}`}>
                                        <p>{item.description}</p>
                                        <div className="carousel-caption">
                                            <img src={item.image} alt="Cliente foto para el testiomonial carousel" width="80px" height="80px"/>
                                            <strong>
                                                {item.name}
                                                <span>{item.title}</span>
                                            </strong>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

