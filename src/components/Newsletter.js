import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Newsletter = () => {
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gfwezzj', 'template_vctv10l', form.current, 'NP-fSpR3BruL1knsK')
            .then((result) => {
                console.log(result.text);
                // show success message
                document.querySelector('.newsletter-success').classList.remove('hide');
                
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="newsletter">
            <div className="container">
                <div className="row">
                    <div class="col-md-6 col-lg-5">
                        <h2>SUBSCRIBE OUR NEWSLETTER</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet</p>
                    </div>
                    <div class="col-md-6 col-lg-7">
                        <div className="newsletter-form">
                            <form ref={form} onSubmit={sendEmail}>
                                <input type="email" name="email" placeholder="Enter your email address"/>
                                <button type="submit" className="primary-button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="newsletter-success hide">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>Thank you for subscribing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;