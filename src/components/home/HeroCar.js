import React, { useState } from "react";
import MovingComponent from 'react-moving-text'

const HeroCar = () => {

    const AnimationsForChaining = ["fadeInFromRight", "fadeInFromLeft", "fadeInFromTop", "fadeInFromBottom"]

    const [ animationIndex, setAnimationIndex ] = useState(0)
    const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

    const handleAnimationType = () => {
        setAnimationIndex(animationIndex + 1)
        setAnimationType(AnimationsForChaining[animationIndex])
    }

    const heroContent = [
        {
            title: "Cejas Perfectas",
            subtitle: "Depilación con Hilo",
            description: "Luce Hermosa, Siempre",
            image: "assets/images/slider-1.gif",
            button: "Reserva tu Servicio Ahora!"
        },
        {
            title: "Pestañas Perfectas",
            subtitle: "Pelo a Pelo",
            description: "Luce Mas Bella, Siempre",
            image: "assets/images/slider-2.gif",
            button: "Reserva tu Servicio Ahora!"
        },
        {
            title: "Maquillaje Profesional",
            subtitle: "Para cualquier ocasión",
            description: "Luce Radiante, Siempre",
            image: "assets/images/slider-3.gif",
            button: "Reserva tu Servicio Ahora!"
        },
        {
            title: "Otros Servicios",
            subtitle: "Maquillaje, Depilación, etc.",
            description: "Luce Hermosa, Siempre",
            image: "assets/images/slider-4.gif",
            button: "Reserva tu Servicio Ahora!"
        }
    ];

    return (
        <section className="hero">
            <div className="hero-content">				
				<div id="main-slider" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#main-slider" data-slide-to="0" className="active"></li>
                            <li data-target="#main-slider" data-slide-to="1"></li>
                            <li data-target="#main-slider" data-slide-to="2"></li>
                            <li data-target="#main-slider" data-slide-to="3"></li>
                        </ol>

                        <div className="carousel-inner" role="listbox">
                            {heroContent.map((item, index) => {
                                return (
                                    <div key={index} className={index === 0 ? "item active" : "item"}>
                                        <img src={item.image} alt="Hero Images for Carousel"/>
                                        <div className="carousel-caption">
                                            <div className="carousel-caption-content">
                                                <h2>
                                                    <MovingComponent
                                                        type="shakeMix"
                                                        duration="3000ms"
                                                        delay="0s"
                                                        direction="normal"
                                                        timing="ease"
                                                        iteration="1"
                                                        fillMode="none"
                                                        play="true"
                                                        style={{color: "white", fontSize: "50px", fontWeight: "bold", fontFamily: "sans-serif", textTransform: "uppercase"}}
                                                        >
                                                        <span>{item.title}</span>
                                                        </MovingComponent>
                                                    <MovingComponent
                                                        type="fadeInFromLeft"
                                                        duration="3000ms"
                                                        delay="0s"
                                                        direction="normal"
                                                        timing="ease"
                                                        iteration="1"
                                                        fillMode="none"
                                                        play="true"
                                                        className="subtitle"
                                                        >
                                                        <strong>{item.subtitle}</strong>
                                                        </MovingComponent>
                                                    <MovingComponent
                                                        type="fadeInFromBottom"
                                                        duration="4000ms"
                                                        delay="0s"
                                                        direction="normal"
                                                        timing="ease"
                                                        iteration="1"
                                                        fillMode="none"
                                                        play="true"
                                                        className="description"
                                                        >
                                                        {item.description}
                                                        </MovingComponent>
                                                </h2>

                                                
                                                <a href="/appointment">
                                                    <MovingComponent
                                                        type="fadeInFromTop"
                                                        duration="5000ms"
                                                        delay="0s"
                                                        direction="normal"
                                                        timing="ease"
                                                        iteration="1"
                                                        fillMode="none"
                                                        play="true"
                                                        
                                                        >
                                                        {item.button}
                                                        </MovingComponent>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default HeroCar;