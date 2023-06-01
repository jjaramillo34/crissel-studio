import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Header = () => {
    
    const navItemsMobile = [
        { name: "Inicio", link: "/"},
        { name: "Servicios", link: "/services"},
        { name: "Nosotros", link: "/about"},
        { name: "Contacto", link: "/contact"},
        { name: "Mi Cita", link: "/appointment"}
    ];

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const { scrollYProgress } = useViewportScroll();

    const headerBgY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
    
    return (
        <motion.header
            className="site-header"
            style={{ 
                y: headerBgY,
                position: "fixed",
                width: "100%",
                zIndex: 100,
                backgroundColor: "rgba(180, 180, 180, 0.3)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                transition: "0.2s ease-out",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
            }}
            initial={{ y: 0 }}
        >
            <div className="container">
                <div className="row">
                    <div className="site-branding col-sm-2">
                        <h1 className="site-title">
                            <a href="#" title="Crissel Studio" rel="home">
                                <img src="assets/images/logo-1.png" alt="logo"/>
                            </a>
                        </h1>
                    </div>
                    <div className="col-sm-10">
                        <div id="site-navigation" className="navbar">
                            <nav className="collapse navbar-collapse navbar-ex1-collapse">
                                <ul className="nav navbar-nav">
                                    {navItemsMobile.map((item, index) => (
                                        <li key={index} className="menu-item">
                                            <Link to={item.link}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <nav id="site-navigation-mobile" class="navbar mobile-navigation">
                        {isNavExpanded ? (
                            <button type="button" class="navbar-toggle" onClick={() => setIsNavExpanded(false)}>
                                <i class="fa fa-times fa-3x" aria-hidden="true"></i>
                            </button>
                        ) : (
                            <button type="button" class="navbar-toggle" onClick={() => setIsNavExpanded(true)}>
                                <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
                            </button>
                        )}

                        <div className={isNavExpanded ? "navigation-menu expanded" : "navbar-offcanvas navbar-offcanvas-touch navbar-offcanvas-right"}>
                            <ul className="nav navbar-nav">
                                {navItemsMobile.map((item, index) => (
                                    <li key={index} className="menu-item">
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
					</nav>
                </div>
            </div>
        </motion.header>
    );
    }

export default Header;


//<header id="masthead" classNameName="site-header">
//        <div classNameName="container">
//            <div classNameName="row">
//                <div classNameName="col-sm-10">
//                    <div classNameName="site-navigation">
//                    <nav classNameName="navigation">
//        <img src="assets/images/logo-1.png" alt="logo" classNameName="logo-mobile" width="120px"/>
//        <button classNameName="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
//            {/* icon from Heroicons.com */}
//            <svg
//            xmlns="http://www.w3.org/2000/svg"
//            classNameName="h-5 w-5"
//            viewBox="0 0 20 20"
//            fill="white"
//            >
//            <path
//                fillRule="evenodd"
//                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//                clipRule="evenodd"
//            />
//            </svg>
//        </button>
//        <div classNameName={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
//            <ul classNameName="navigation-items">
//                {navItemsMobile.map((item, index) => {
//                    return (
//                        <li key={index}>
//                            <Link to={item.link}>{item.name}</Link>
//                        </li>
//                    )
//                })}
//            </ul>
//        </div>
//    </nav>
//                    </div>
//                </div>
//                
//                </div>
//            </div>
//        
//</header>