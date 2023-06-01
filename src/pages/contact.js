import React from "react";
import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactUs from "../components/contact/ContactUs";

const ContactPage = () => {
    return (
        <Fragment>
            <Header />
            <div id="content" className="site-content content-wrapper page-content">
                <div className="page type-page hentry">
                    <div className="page-content-body">
                        <ContactHero />
                        <ContactUs />
                        
                    </div>
                </div>
            </div>
            
            <div className="clearfix"></div>
            <Footer />
        </Fragment>        
        );
    }

export default ContactPage;