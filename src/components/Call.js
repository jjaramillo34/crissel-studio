import React from "react";
import { motion } from "framer-motion";

const Call = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            x: "100vw",
            transition: {
                staggerChildren: 0.5,
                rotate: 360,
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                mass: 0.4,
                damping: 8,
                staggerChildren: 0.4,
                when: "afterChildren",
            }
        },
        exit: {
            x: "-100vw",
            transition: { 
                ease: "roughEase",
                
            }
        }
    };

    return (
        <section className="call-to-action">
            <div className="container">
                <div className="row">
                    <motion.div
                        className="col-md-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{ 
                            textAlign: "center" ,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            borderRadius: "10px",
                        }}
                    >
                        <div className="section-content">
                            <div className="col-md-offset-5 col-lg-offset-6">
                                <motion.h2
                                    className="section-title"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    style={{
                                        fontSize: "2.8rem",
                                        fontWeight: "bold",
                                        color: "#fff",
                                    }}
                                >
                                    <strong>Belleza</strong> es poder <br/>
                                    <strong>Maquillaje</strong> es algo que realmente embellece <br/>
                                </motion.h2>

                                <div className="section-break"></div>
                                <motion.p
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        color: "#fff",
                                        flexDirection: "column",
                                    }}
                                >
                                    <strong>Maquillaje</strong> es una herramienta que te ayuda a ser lo que quieras ser.
                                    <strong> Cejas</strong> es el marco de tu rostro.
                                    <strong> Uñas</strong> es el toque final de tu look perfecto.
                                    <strong> Pestanas</strong> es el toque de glamour que te hace sentir especial
                                </motion.p>

                            </div>
                        </div>
                    </motion.div>
                    
                </div>
            </div>
        </section>
    );
}

export default Call;

//<div className="section-content">
//    <div className="col-md-offset-5 col-lg-offset-6">
//        
//        <h2>
//            <strong>Belleza</strong> es poder <br/>
//            <strong>Maquillaje</strong> es algo que realmente <br/> embellece
//        </h2>
//        <div className="section-break"></div>
//        <p>
//            <strong>Maquillaje</strong> es una herramienta que te ayuda a ser lo que quieras ser.
//            <strong> Cejas</strong> es el marco de tu rostro.
//            <strong> Uñas</strong> es el toque final de tu look perfecto.
//            <strong> Pestanas</strong> es el toque de glamour que te hace sentir especial
//        </p>
//        <a href="/services" className="primary-button">Learn More</a>
//    </div>
//</div>