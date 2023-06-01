import React, { Fragment } from "react";
import Header from "../components/Header";
import HeroCar from "../components/home/HeroCar";
import Tabs from "../components/home/Tabs";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Insta from "../components/Insta";
import Package from "../components/Package";
import Work from "../components/Work";
import Artists from "../components/Artists";
import Stats from "../components/Stats";
import Call from "../components/Call";
import Newsletter from "../components/Newsletter";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Insta2 from "../components/Insta2";

function IndexPage() {
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
            <Header/>
		    <div id="content" className="site-content content-wrapper page-content">
			    <div className="page type-page hentry">
				    <div className="page-content-body">
					    <HeroCar />
                        <br/>
                        <br/>
                        <hr/>
					    <Tabs />
					    <Work/>
					    <Package />
					    <Call/>
					    <Artists/>
					    <Stats/>
					    <Testimonials/>
					    
                        <Insta2/>
					    
					    <Newsletter/>
				    </div>
			    </div>
		    </div>
            <div className="clearfix"></div>
		    <Footer/>
        </Fragment>
    );
    }

export default IndexPage;


//<section className="latest-news">
//    <div className="section-header clearfix">
//        <span>Keep in Touch</span>
//        <h2><strong>Our Latest</strong> News</h2>
//        <div className="section-break"></div>
//    </div>
//    <div className="section-content">
//        <div className="container">
//            <div className="row">
//                <div className="col-md-4">
//                    <div className="news-box">
//                        <div className="news-box-image">
//                            <a href="#">
//                                <img src="assets/images/latest-news-1.jpg" alt="image"/>
//                            </a>
//                        </div>
//                        <div className="news-box-content">
//                            <span className="date-meta">March 15, 2016</span>
//                            <h3>
//                                <a href="#">How to : classNameic Lipstick Using With Lisa Eldridge</a>
//                            </h3>
//                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
//                        </div>
//                        <div className="news-box-link">
//                            <a href="#">Read More</a>
//                        </div>
//                    </div>
//                </div>
//                <div className="col-md-4">
//                    <div className="news-box">
//                        <div className="news-box-image">
//                            <a href="#">
//                                <img src="assets/images/latest-news-2.jpg" alt="image"/>
//                            </a>
//                        </div>
//                        <div className="news-box-content">
//                            <span className="date-meta">March 15, 2016</span>
//                            <h3>
//                                <a href="#">Tips and Trick : The Latest Treatments for Hair Loss</a>
//                            </h3>
//                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
//                        </div>
//                        <div className="news-box-link">
//                            <a href="#">Read More</a>
//                        </div>
//                    </div>
//                </div>
//                <div className="col-md-4">
//                    <div className="news-box">
//                        <div className="news-box-image">
//                            <a href="#">
//                                <img src="assets/images/latest-news-3.jpg" alt="image"/>
//                            </a>
//                        </div>
//                        <div className="news-box-content">
//                            <span className="date-meta">March 15, 2016</span>
//                            <h3>
//                                <a href="#">How to Choose the Best Bridal Makeup for Your Wedding Day</a>
//                            </h3>
//                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
//                        </div>
//                        <div className="news-box-link">
//                            <a href="#">Read More</a>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </div>
//    </div>
//</section>