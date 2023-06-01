import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const artists = [
    { name: "Cristina Bustos", link: "https://www.instagram.com/crisselstudio.ec/", image: "assets/images/our-makeup-artist-1.jpeg", social: "fa fa-instagram fa-2x" },
    { name: "Betty Leon", link: "https://www.instagram.com/crisselstudio.ec/", image: "assets/images/our-makeup-artist-2.jpeg", social: "fa fa-instagram fa-2x" },
    { name: "Sofia Altamirano", link: "https://www.instagram.com/crisselstudio.ec/", image: "assets/images/our-makeup-artist-3.jpeg", social: "fa fa-instagram fa-2x" },
    { name: "Mateo Altamirano", link: "https://www.instagram.com/crisselstudio.ec/", image: "assets/images/our-makeup-artist-4.jpeg", social: "fa fa-instagram fa-2x" },
];

const Artists = () => {

    const [show, setShow] = useState(false);
    const [rotate, setRotate] = useState(0);

    const rotateImage = () => {
        setRotate(rotate + 360);
    }




    // masked image with blinds
    const blinds = {
        hidden: {
            x: "-100vw",
            transition: {
                staggerChildren: 0.5,
            }
        },
        visible: {
            x: 0,
            transition: {
                staggerChildren: 0.5,
            }
        }
    };

    // added backgroundColor, borderRadius, padding
    const containerVariants = {
        hidden: {
            opacity: 0,
            x: "100vw",
            transition: {
                staggerChildren: 0.5,
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
                when: "beforeChildren",
            }
        },
        exit: {
            x: "-100vw",
            transition: { ease: "easeInOut" }
        }
    };

    const childVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    };
    
    return (
        <motion.section
            className="our-makeup-artist-area"
            variants={blinds}
            initial="hidden"
            animate="visible"
            exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
            scale={show ? 2 : 1}
            transition={{
                duration: 0.5,
            }}
            style={{ 
                display: "flex", 
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(110deg, rgba(243,191,203,1) 61%, rgba(180,180,180,1) 60%)",
                padding: "50px 0",
            }}
        >
        <div className="container">
            <div className="row">
                <div className="section-header clearfix">
                    <hr />
                    <span>Our Makeup Artists</span>
                    <h2><strong>Nuestros</strong> Artistas</h2>
                    <div className="section-break"></div>
                </div>
                <div className="section-content">
                    <motion.div 
                        className="row"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        duration={2}
                        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
                    >
                        {artists.map((artist) => (
                            <motion.div
                                className="col-sm-6 col-md-3"
                                variants={childVariants}
                                whileHover={{ scale: 0.8 }}
                                whileTap={{ scale: 0.9 }}
                                key={artist.name}
                                duration={2}
                                exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
                                style={{ display: "flex", justifyContent: "center" }}
                            >
                                <motion.div
                                    className="artist-box"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    duration={2}
                                    exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
                                >
                                    <motion.a
                                        href={artist.link}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        duration={2}
                                        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
                                    >
                                        <motion.img
                                            src={artist.image}
                                            alt="image"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            duration={2}
                                            exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
                                            rotate={rotate}
                                            onClick={rotateImage}
                                            style={{
                                                borderRadius: "10px",
                                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                                                marginBottom: "10px",
                                                maxHeight: "300px",
                                                maxWidth: "300px",
                                            }}
                                        />
                                    </motion.a>
                                    <div className="artist-box-info">
                                        <motion.h3
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            duration={2}
                                            exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
                                        >
                                            <motion.a
                                                href={artist.link}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                duration={2}
                                                exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
                                                style={{ 
                                                    color: "#000",
                                                    fontWeight: "bold",
                                                    position: "relative",
                                                    zIndex: "1",
                                                    alignContent: "center",
                                                    justifyContent: "center",
                                                    alignItems: "center",

                                            }}
                                            >
                                                {artist.name}
                                            </motion.a>
                                            <span>Makeup Artist</span>
                                        </motion.h3>
                                        <a href={artist.link} className="artist-social-link">
                                            <i className={artist.social} aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </motion.div>

                            </motion.div>
                        ))}
                    </motion.div>

                    <hr />
                    
                </div>
            </div>
        </div>
    </motion.section>
    )
}

export default Artists;

//<div class="col-sm-6 col-md-3">
//    <div class="artist-box">
//        <a href="#">
//            <img src="images/our-makeup-artist-2.jpg" alt="image">
//        </a>
//        <div class="artist-box-info">
//            <h3>
//                <a href="#">Evelyn Nelson</a> 
//                <span>Makeup Artist</span>
//            </h3>
//            <a href="#" class="artist-social-link">
//                <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
//            </a>
//        </div>
//    </div>
//</div>

