import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const random_text = [
    "Amor", "Marravillosa", "Belleza", "Hermosa", "Preciosa", 'Pestanas', 'Crissel', 'Cejas', 'Ojos', "Perfectas", "Espectacular"];

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

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundPosition: 'center',
    height: '500px',
    backgroundRepeat: 'no-repeat',
    
}

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    scale: 0.4,
    arrows: false,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: "ease",
    }


const Insta = () => {
    return (
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
                <div className="instagram-slides">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="instagram-slides-content">
                                    <Zoom {...zoomOutProperties}>
                                        {slideImages.map((each, index) => (
                                            <div key={index} style={{ width: "100%" }}>
                                                <div style={{ ...divStyle, backgroundImage: `url(${each.url})` }}>
                                                    <span style={{ ...spanStyle, fontSize: '30px' }}>{random_text[Math.floor(Math.random() * random_text.length)]}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </Zoom>
                                                
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

    )
}

export default Insta;

