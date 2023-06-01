import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if (form.current.name.value === '' || form.current.email.value === '' || form.current.subject.value === '' || form.current.message.value === '') {
            document.querySelector('.contact-error').classList.remove('hide');
            return false;
        }
        else {
        emailjs.sendForm('service_gfwezzj', 'template_vctv10l', form.current, 'NP-fSpR3BruL1knsK')
            .then((result) => {
                console.log(result.text);
                // show success message
                document.querySelector('.newsletter-success').classList.remove('hide');
                
            }, (error) => {
                console.log(error.text);
            });
        }
    };

    const address = [
        {
            id: 1,
            title: 'Studio Principal',
            'address': {name: 'Mera entre Bolivar y Rocafuerte, Ambato Ecuador', icon:"fa fa-map-marker"},
            'phone': {name: '99 505 9403 | 99 295 0683', icon:"fa fa-phone"},
            'email': {name: 'crissel@crissel.studio', icon: "fa fa-envelope"}
        },
        {
            id: 2,
            title: 'Studio Secundario',
            'address': {name: 'Av. Atahualpa y Pillahuazo, Ambato Ecuador', icon:"fa fa-map-marker"},
            'phone': {name: '99 505 9403 | 99 295 0683', icon:"fa fa-phone"},
            'email': {name: 'crissel@crissel.studio', icon: "fa fa-envelope"}
        },
    ]

    return (
        <section class="contact-us">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="contact-us-content">
                        <h2>Contactanos</h2>
                        <p>Si tienes alguna duda, comentario o sugerencia, no dudes en contactarnos.</p>
                        <div class="row">
                            {address.map((item) => (
                                    <div class="contact-us-item">
                                        <h3>{item.title}</h3>
                                        <ul>
                                            <a href="http://maps.google.com/maps?q=36.26577,-92.54324" target="_blank" rel="noreferrer">
                                                <li><i class={item.address.icon}></i>{item.address.name}</li>
                                            </a>
                                        </ul>
                                        <ul>
                                            <a href="tel:0995059403">
                                                <li><i class={item.phone.icon}></i>{item.phone.name}</li>
                                            </a>
                                        </ul>
                                        <ul>
                                            <a href="mailto:crissel@crissel.studio?subject=Contactanos a Crissel.Studio">
                                                <li><i class={item.email.icon}></i>{item.email.name}</li>
                                            </a>
                                        </ul>
                                    </div>
                                
                            ))}
                        </div>
                    </div>

                                

                </div>
                <div class="col-md-6">
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="contact-form">
                        <h2>Leave us a message</h2>
                            <input type="text" name="name" placeholder="Name"/>
                            <input type="email" name="email" placeholder="Email"/>
                            <input type="text" name="subject" placeholder="Subject"/>
                            <textarea name="message" placeholder="Message" rows="3"></textarea>
                            <div class="col-md-12">
                                <button type="submit" class="primary-button">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="contact-error hide">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-danger" role="alert">
                            Por favor, rellena todos los campos.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="newsletter-success hide">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-success" role="alert">
                            Gracias por contactarnos. Te responderemos lo antes posible.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default ContactUs;


