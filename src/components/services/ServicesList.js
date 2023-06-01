import React from "react";
import { motion } from "framer-motion";

const data = [
    {
        id: 1,
        title: "Depilación Hindú de Cejas",
        description: "Servicio diseñado en la India para la remoción del vello facial, de forma especial a las cejas, técnica q tarda de 3 a 5 min en realizarse y cuyo beneficio es de 2 a 3 semanas, removemos el vello de raíz.",
        image: "assets/images/services-img-1.gif",
        link: "/services/depilacion-de-cejas",
        option: [
            { id: 1, title: "Depilación con hilo" },
            { id: 2, title: "Depilación con cera" },
            { id: 3, title: "Depilación con pinza" },
        ]
    },
    {
        id: 2,
        title: "Extensiones de Pestañas",
        description: "Servicio diseñado para vernos perfectas desde el momento de despertar, al salir de la ducha y cuando vamos a una piscina, logramos un efecto de volumen y mucho mas largas, logramos reajustar la forma de tus ojos, protejemos tus pestañas naturales, no afectan los ojos, y no causan irritación. Tiempo de duración de 8meses a 1 año. Tiempo de servicio de 2 horas a 2 horas y media.",
        image: "assets/images/services-img-2.gif",
        link: "/services/pestanas-permanentes",
        option: [
            { id: 1, title: "Pestañas permanentes" },
            { id: 2, title: "Pestañas pelo a pelo"},
            { id: 3, title: "Pestañas de colores"}
        ]
    },
    {
        id: 3,
        title: "Maquillaje con Henna",
        description: "Maquillaje semipermanente q no afecta el vello ni la piel, para mejorar de forma temporal la forma y el diseño de cejas, tiempo de duración de 7 a 10 días, tiempo de servicio de 30 a 40 min.",
        image: "assets/images/services-img-3.gif",
        link: "/services/pestanas-pelo-a-pelo",
        option: [
            { id: 1, title: "Maquillaje con henna" },
            { id: 2, title: "Maquillaje con henna de cejas"},
            { id: 3, title: "Maquillaje con henna de labios"}
        ]
    },
    {
        id: 4,
        title: "Maquillaje Profesional",
        description: "Servicio diseñado para cualquier ocasión, logramos un maquillaje de acuerdo a tu estilo, personalidad y tipo de evento, logramos un maquillaje de larga duración, tiempo de servicio de 1 hora a 1 hora y media.",
        image: "assets/images/services-img-4.gif",
        link: "/services/maquillaje-profesional",
        option: [
            { id: 1, title: "Maquillaje profesional" },
            { id: 2, title: "Maquillaje de novia"},
            { id: 3, title: "Maquillaje de fiesta"}
        ]
    },
    {
        id: 5,
        title: "Planchado de Cejas",
        description: "Servicio diseñado para mejorar la forma de tus cejas, logramos un efecto de cejas peinadas, tiempo de duración de 1 a 2 semanas, tiempo de servicio de 30 a 40 min.",
        image: "assets/images/services-img-5.gif",
        link: "/services/planchado-de-cejas",
        option: [
            { id: 1, title: "Planchado de cejas" },
            { id: 2, title: "Planchado de cejas con tinte"},
            { id: 3, title: "Planchado de cejas con henna"}
        ]
    },
    {
        id: 6,
        title: "Microblading",
        description: "Servicio diseñado para mejorar la forma de tus cejas, logramos un efecto de cejas pelo a pelo, tiempo de duración de 1 a 2 años, tiempo de servicio de 1 hora a 1 hora y media.",
        image: "assets/images/services-img-6.gif",
        link: "/services/microblading",
        option: [
            { id: 1, title: "Microblading" },
            { id: 2, title: "Microblading con sombreado"},
            { id: 3, title: "Microblading con tinte"}
        ]
    },
    {
        id: 7,
        title: "Lifting de Pestañas",
        description: "Servicio diseñado para mejorar la forma de tus pestañas, logramos un efecto de pestañas levantadas, tiempo de duración de 1 a 2 meses, tiempo de servicio de 1 hora a 1 hora y media.",
        image: "assets/images/services-img-7.gif",
        link: "/services/lifting-de-pestanas",
        option: [
            { id: 1, title: "Lifting de pestañas" },
            { id: 2, title: "Lifting de pestañas con tinte"},
            { id: 3, title: "Lifting de pestañas con keratina"}
        ]
    },

];    

const ServicesList = () => {

    // Variants for Container
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const container2 = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },

        }),
    };

    // Variants for each letter
    const child = {
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        hidden: {
          opacity: 0,
          x: -20,
          y: 10,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
      };

    const child2 = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const childli = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 0,
            y: 10,
            transition: {
                delay: 0.5,
                staggerChildren: 0.05,
                delayChildren: 0.04,
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

                        
    
    return (
        <section className="servicios-list">
        <div className="container">
            <div className="row">
                
                {data.map((item, index) => {
                    return (
                        <div key={index} className="servicios-list-item">
                            <div className="col-md-5">
                                <div className="servicios-list-img">
                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                        custom={index + 1}
                                        className="servicios-list-img"
                                    >
                                        <img src={item.image} alt={item.title} />
                                    </motion.div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="servicios-list-info">
                                    <motion.h2 
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                        custom={index + 1}
                                    >
                                        {[...item.title].map((letter, index) => {
                                            return (
                                                <motion.span
                                                    key={index}
                                                    variants={child}
                                                    className="char"
                                                >
                                                    {letter}
                                                </motion.span>
                                            );
                                        })}
                                    </motion.h2>

                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                        custom={index + 1}
                                    >
                                        <div className="line"></div>
                                    </motion.div>
                                    <motion.p
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                        custom={index + 1}
                                    >
                                        {[...item.description].map((letter, index) => {
                                            return (
                                                <motion.span
                                                    key={index}
                                                    variants={child2}
                                                    className="char"
                                                >
                                                    {letter}
                                                    </motion.span>
                                                    );
                                                })}
                                    </motion.p>
                                    <motion.ul
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                        custom={index + 1}
                                    >
                                        {item.option.map((option, index) => {
                                            return (
                                                <motion.li
                                                    key={index}
                                                    variants={childli}
                                                    className="char"
                                                >
                                                    {[...option.title].map((letter, index) => {
                                                        return (
                                                            <motion.span
                                                                key={index}
                                                                variants={child2}
                                                                className="char"
                                                            >
                                                                {letter}
                                                                </motion.span>
                                                                );
                                                            })}
                                                </motion.li>
                                            );
                                        })}
                                    
                                    </motion.ul>
                                    <motion.a
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                        custom={index + 1}
                                        className="primary-button"
                                        
                                    >
                                        Ver más
                                    </motion.a>            
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
        
    )
}

export default ServicesList;

