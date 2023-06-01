import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Artists from "../components/Artists";
import AboutHero from "../components/about/AboutHero";
import AboutUs from "../components/about/AboutUs";
import ButtonAbout from "../components/about/ButtonAbout";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const AboutPage = () => {
    return (
        <Fragment>
            
			<FloatingWhatsApp 
                phoneNumber="+593992950683" 
                accountName="Crissel Make Up" 
                avatar="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-1/329125449_1592007401342162_1284423828634930606_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=c6021c&_nc_ohc=1IGy_i-S0sMAX9FCPZ9&_nc_ht=scontent-lga3-1.xx&oh=00_AfCXIHGiimjgDQ_QAhb3r-bdlLiCJjbPD73FuoDaDXgCJw&oe=6470C384" 
                statusMessage="Hola, en que podemos ayudarte?"
                chatMessage="Hola, en que podemos ayudarte?"
                allowEsc
                notification
                notificationSound={true}
                defaultCountry="EC"
                popupMessage="Hola, en que podemos ayudarte?"
                allowClickAway={true}
            />
            <Header />
            <div id="content" className="site-content content-wrapper page-content">
			<div className="page type-page hentry">
				<div className="page-content-body">
					
                <AboutHero />
				<hr />
				<div className="section-break"></div>
					
				<AboutUs />
				<Artists/>
				<ButtonAbout />
				<Testimonials />
				<hr />
				</div>
			</div>
		</div>
		<Footer />
        </Fragment>

        
    )
}

export default AboutPage;