import React from "react";
import { useRef, useEffect } from "react";
import {motion, useScroll } from "framer-motion";

const slideImages = [
    { url: "assets/images/instagram-img-1.jpg", caption: "Slide 1" },
    { url: "assets/images/instagram-img-2.jpg", caption: "Slide 2" },
    { url: "assets/images/instagram-img-3.jpg", caption: "Slide 3" },
    { url: "assets/images/instagram-img-4.jpg", caption: "Slide 4" },
    { url: "assets/images/instagram-img-5.jpg", caption: "Slide 5" },
    { url: "assets/images/instagram-img-6.jpg", caption: "Slide 6" },
    { url: "assets/images/instagram-img-7.jpg", caption: "Slide 7" },
    { url: "assets/images/instagram-img-8.jpg", caption: "Slide 8" },
    { url: "assets/images/instagram-img-9.jpg", caption: "Slide 9" },
    { url: "assets/images/instagram-img-10.jpg", caption: "Slide 10" },
    { url: "assets/images/instagram-img-11.jpg", caption: "Slide 11" },
    { url: "assets/images/instagram-img-12.jpg", caption: "Slide 12" },
    { url: "assets/images/instagram-img-13.jpg", caption: "Slide 13" },
    { url: "assets/images/instagram-img-14.jpg", caption: "Slide 14" },
    { url: "assets/images/instagram-img-15.jpg", caption: "Slide 15" },
    { url: "assets/images/instagram-img-16.jpg", caption: "Slide 16" },
    { url: "assets/images/instagram-img-17.jpg", caption: "Slide 17" },
    { url: "assets/images/instagram-img-18.jpg", caption: "Slide 18" },
    { url: "assets/images/instagram-img-19.jpg", caption: "Slide 19" },
    { url: "assets/images/instagram-img-20.jpg", caption: "Slide 20" },
    { url: "assets/images/instagram-img-21.jpg", caption: "Slide 21" },
    { url: "assets/images/instagram-img-22.jpg", caption: "Slide 22" },
    { url: "assets/images/instagram-img-23.jpg", caption: "Slide 23" },
    { url: "assets/images/instagram-img-24.jpg", caption: "Slide 24" },
    { url: "assets/images/instagram-img-25.jpg", caption: "Slide 25" },
    { url: "assets/images/instagram-img-26.jpg", caption: "Slide 26" },
    { url: "assets/images/instagram-img-27.jpg", caption: "Slide 27" },
    { url: "assets/images/instagram-img-28.jpg", caption: "Slide 28" },
    { url: "assets/images/instagram-img-29.jpg", caption: "Slide 29" },
    { url: "assets/images/instagram-img-30.jpg", caption: "Slide 30" },
]

const random_text = [
    "belleza", // beauty
    "hermosa", // beautiful
    "atractiva", // attractive
    "encantadora", // charming
    "elegante", // elegant
    "radiante", // radiant
    "deslumbrante", // dazzling
    "seductora", // seductive
    "graciosa", // graceful
    "espléndida", // splendid
    "estilo", // style
    "juvenil", // youthful
    "delicada", // delicate
    "fascinante", // fascinating
    "seductora", // alluring
    "impecable", // flawless
    "sensual", // sensual
    "resplandeciente", // resplendent
    "sofisticada", // sophisticated]
    "sensualidad", // sensuality
    "bella", // pretty
    "atractiva", // attractive
    "hermosa", // beautiful
    "valiente", // brave
    "brillante", // brilliant
    "bonita", // cute
    "glamurosa", // glamorous
    "esticada", // gorgeous
];

const Insta2 = () => {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <>
            <section className="instagram">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="instagram-title">
                                <h2>Siguenos en Instagram</h2>
                                <p>Encuentra inspiración en nuestras redes sociales</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            className="indicator"
                            style={{ pathLength: scrollXProgress }}
                        />
                </svg>
                    <ul ref={ref}>
                        {slideImages.map((slideImage, index) => {
                            return (
                                <li key={index}>
                                    <div className="instagram-img">
                                        <img src={slideImage.url} alt={slideImage.caption} />
                                        <div className="instagram-text">
                                            <p>{random_text[Math.floor(Math.random() * random_text.length)]}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}


                    </ul>


                


                <div class="clearfix"></div>

                    <div class="instagram-info">
                        <div class="container">
                            <div class="row">
                                <a href="https://www.instagram.com/crisselstudio.ec/" target="_blank" rel="noreferrer">
                                    <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>@crisselstudio.ec
                                    </a>
                            </div>
                        </div>
            </div>
        </section>
          
        </>

      );
    }
export default Insta2;