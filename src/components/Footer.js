import React from "react";
import { motion } from "framer-motion";


const Footer = () => {

    const menuItems = [
        { name: "Inicio", link: "/"},
        { name: "Servicios", link: "/services"},
        { name: "Nosotros", link: "/about"},
        { name: "Contacto", link: "/contact"},
        { name: "Mi Cita", link: "/appointment"}
    ];

    const social = [
        { name: "facebook", link: "#", class: "facebook", icon: "fa fa-facebook fa-2x"},
        { name: "twitter", link: "#", class: "twitter", icon: "fa fa-twitter fa-2x"},
        { name: "instagram", link: "https://www.instagram.com/crisselstudio.ec/", class: "instagram", icon: "fa fa-instagram fa-2x"},
        { name: "linkedin", link: "#", class: "linkedin", icon: "fa fa-linkedin fa-2x"},
    ];

    return (
        <motion.footer
            className="site-footer"
            id="footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: "bold",
                letterSpacing: "1px",
                background: "linear-gradient(145deg, rgba(242,190,203,1) 30%, rgba(180,180,180,1) 60%)",
        }}
        >
			<motion.div
                className="footer-info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    background: "linear-gradient(145deg, rgba(242,190,203,1) 30%, rgba(180,180,180,1) 60%)",
                }}
            >
				<div className="container">
					<div className="row">
						<div className="footer-logo">
							<a href="/" title="Crissel Studio" rel="home">
								<motion.img
                                    src="assets/images/logo2.png"
                                    alt="Crissel Studio"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        position: "relative",
                                        zIndex: 1,
                                        width: "100%",
                                        maxWidth: "175px",
                                        height: "auto",
                                        margin: "0 auto",
                                        display: "block",
                                        textAlign: "center",
                                        padding: "2rem 0",
                                    }}
                                    rotate={180}
                                />

							</a>

						</div>
						<div className="footer-menu">
							<div className="footer-links">
								<ul>
                                    {menuItems.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={item.link}>{item.name}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
							</div>
							<div className="footer-links">
								<ul className="social">
									{social.map((item, index) => {
                                        return (
                                            <motion.li
                                                key={index}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                duration={2}
                                                exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
                                                style={{
                                                    display: "inline-block",
                                                    marginRight: "1rem",
                                                    cursor: "pointer",
                                                    color: "#fff",
                                                    fontWeight: "bold",
                                                    position: "relative",
                                                    zIndex: "1",
                                                    alignContent: "center",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <i className={item.icon} aria-hidden="true"></i>
                                            </motion.li>

                                        )
                                    })
                                    }
								</ul>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
			<div className="footer-copyright">
				<div className="container">
					<div className="row">		
                        <span>Copyright &copy; {new Date().getFullYear()} Crissel.Studio. All Rights Reserved.</span>
					</div>
				</div>
			</div>
		</motion.footer>
    )
}

export default Footer;

