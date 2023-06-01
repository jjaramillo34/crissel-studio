import React from "react";


const stats = [
    { name: "Clientes Felices", number: "3250" },
    { name: "Procedimientos Realizados", number: "2930" },
    { name: "Clinic Around The World", number: "2300" }
];        

const Stats = () => {
    return (
        <section class="stats">
            <div class="container">
                <div class="row">
                    <div class="section-content">
                        <div class="col-md-8 col-lg-7">
                            <img src="assets/images/logo-1.png" alt="logo" width="200"/>
                            <p>
                                En <strong>Crissel Studio</strong> nos dedicamos a la belleza y el cuidado de la piel, entre nuestros servicios se encuentran: cejas, pestañas, uñas, depilación, tratamientos faciales y corporales.
                                Tambien contamos con una linea de productos para el cuidado de la piel y el cabello. Nuestra misión es brindar un servicio de calidad y profesionalismo a nuestros clientes.
                            </p>
                            <div class="stats-count">
                                <div class="row">
                                    {stats.map((item, index) => (
                                        <div class="col-sm-4" key={index}>
                                            <h3><strong class="home-stats">{item.number}</strong>+</h3>
                                            <p>{item.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats;
