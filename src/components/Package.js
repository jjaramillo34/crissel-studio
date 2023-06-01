import React from "react";

const data = [
    {
        title: "Paquete Básico",
        price: "$30.00",
        items: [
            { name: "Depilación de cejas", icon: "fa fa-check" },
            { name: "Depilación de labio", icon: "fa fa-check" },
            { name: "Depilación de mentón", icon: "fa fa-check" },
            { name: "Depilación de cara completa", icon: "fa fa-times" },
            { name: "Depilación de axilas", icon: "fa fa-times" },
            { name: "Depilación de brazos", icon: "fa fa-times" },
        ]
    },
    {
        title: "Paquete Intermedio",
        price: "$50.00",
        items: [
            { name: "Depilación de cejas", icon: "fa fa-check" },
            { name: "Depilación de labio", icon: "fa fa-check" },
            { name: "Depilación de mentón", icon: "fa fa-check" },
            { name: "Depilación de cara completa", icon: "fa fa-check" },
            { name: "Depilación de axilas", icon: "fa fa-times" },
            { name: "Depilación de brazos", icon: "fa fa-times" },
        ]
    },
    {
        title: "Paquete Completo",
        price: "$100.00",
        items: [
            { name: "Depilación de cejas", icon: "fa fa-check" },
            { name: "Depilación de labio", icon: "fa fa-check" },
            { name: "Depilación de mentón", icon: "fa fa-check" },
            { name: "Depilación de cara completa", icon: "fa fa-check" },
            { name: "Depilación de axilas", icon: "fa fa-check" },
            { name: "Depilación de brazos", icon: "fa fa-check" },
        ]
    },
    {
        title: "Paquete Premium",
        price: "$150.00",
        items: [
            { name: "Depilación de cejas", icon: "fa fa-check" },
            { name: "Depilación de labio", icon: "fa fa-check" },
            { name: "Depilación de mentón", icon: "fa fa-check" },
            { name: "Depilación de cara completa", icon: "fa fa-check" },
            { name: "Depilación de axilas", icon: "fa fa-check" },
            { name: "Depilación de brazos", icon: "fa fa-check" },
        ]
    }
];

const Package = () => {
    return (
        <section className="package">
            <div className="container">
                <div className="row">
                    <div className="section-header clearfix">
                        <span>Escoja entre nuestras ofertas</span>
                        <h2><strong>Precios Especiales</strong> En Paquetes</h2>
                        <div className="section-break"></div>
                    </div>
                    <div className="section-content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh <br/> 
                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim <br/>
                            veniam, quis nostrud exerci tation.
                        </p>
                        <div className="col-md-6 col-lg-3">
                            <div className="package-box">
                                <h3>
                                    {data[0].title}
                                    <span>{data[0].price}</span>
                                </h3>
                                {data[0].items.map((item, index) => {
                                    return (
                                        <p key={index}>
                                            <i className={item.icon} aria-hidden="true"></i>
                                            {item.name}
                                        </p>
                                    )
                                })}
                                <a href="/services" className="select-package">Select</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="package-box">
                                <h3>
                                    {data[1].title}
                                    <span>{data[1].price}</span>
                                </h3>
                                {data[1].items.map((item, index) => {
                                    return (
                                        <p key={index}>
                                            <i className={item.icon} aria-hidden="true"></i>
                                            {item.name}
                                        </p>
                                    )
                                })}
                                <a href="/services" className="select-package">Select</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="package-box">
                                <h3>
                                    {data[2].title}
                                    <span>{data[2].price}</span>
                                </h3>
                                {data[2].items.map((item, index) => {
                                    return (
                                        <p key={index}>
                                            <i className={item.icon} aria-hidden="true"></i>
                                            {item.name}
                                        </p>
                                    )
                                })}
                                <a href="/service" className="select-package">Select</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="package-box">
                                <h3>
                                    {data[3].title}
                                    <span>{data[3].price}</span>
                                </h3>
                                {data[3].items.map((item, index) => {
                                    return (
                                        <p key={index}>
                                            <i className={item.icon} aria-hidden="true"></i>
                                            {item.name}
                                        </p>
                                    )
                                })}
                                <a href="/services" className="select-package">Select</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Package;

//<section class="package">
//    <div class="container">
//        <div class="row">
//            <div class="section-header clearfix">
//                <span>Choose Our Makeup Offer</span>
//                <h2><strong>Special Price</strong> Package</h2>
//                <div class="section-break"></div>
//            </div>
//            <div class="section-content">
//                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh <br> euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim <br>veniam, quis nostrud exerci tation.</p>
//                <div class="col-md-6 col-lg-3">
//                    <div class="package-box">
//                        <h3>
//                            Classic
//                            <span>Package</span>
//                        </h3>
//                        <p class="price">$195.00</p>
//                        <ul>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Air Brush
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Retouch
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Hairstyling
//                            </li>
//                            <li>
//                                <i class="fa fa-times" aria-hidden="true"></i>
//                                Corner Lashes
//                            </li>
//                            <li>
//                                <i class="fa fa-times" aria-hidden="true"></i>
//                                Body Glowing
//                            </li>
//                            <li>
//                                <i class="fa fa-times" aria-hidden="true"></i>
//                                Eyebrows
//                            </li>
//                        </ul>
//                        <a href="#" class="select-package">Select</a>
//                    </div>
//                </div>
//                <div class="col-md-6 col-lg-3">
//                    <div class="package-box">
//                        <h3>
//                            Traditional
//                            <span>Package</span>
//                        </h3>
//                        <p class="price">$240.00</p>
//                        <ul>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Air Brush
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Retouch
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Hairstyling
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Corner Lashes
//                            </li>
//                            <li>
//                                <i class="fa fa-times" aria-hidden="true"></i>
//                                Body Glowing
//                            </li>
//                            <li>
//                                <i class="fa fa-times" aria-hidden="true"></i>
//                                Eyebrows
//                            </li>
//                        </ul>
//                        <a href="#" class="select-package">Select</a>
//                    </div>
//                </div>
//                <div class="col-md-6 col-lg-3">
//                    <div class="package-box active">
//                        <span class="ribbon">Most Popular</span>
//                        <h3>
//                            Luxuary
//                            <span>Package</span>
//                        </h3>
//                        <p class="price">$285.00</p>
//                        <ul>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Air Brush
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Retouch
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Hairstyling
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Corner Lashes
//                            </li>
//                            <li>
//                                <i class="fa fa-times" aria-hidden="true"></i>
//                                Body Glowing
//                            </li>
//                            <li>
//                                <i class="fa fa-times" aria-hidden="true"></i>
//                                Eyebrows
//                            </li>
//                        </ul>
//                        <a href="#" class="select-package">Select</a>
//                    </div>
//                </div>
//                <div class="col-md-6 col-lg-3">
//                    <div class="package-box">
//                        <h3>
//                            Complete
//                            <span>Package</span>
//                        </h3>
//                        <p class="price">$350.00</p>
//                        <ul>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Air Brush
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Retouch
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Hairstyling
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Corner Lashes
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Body Glowing
//                            </li>
//                            <li>
//                                <i class="fa fa-check" aria-hidden="true"></i>
//                                Eyebrows
//                            </li>
//                        </ul>
//                        <a href="#" class="select-package">Select</a>
//                    </div>
//                </div>
//            </div>
//        </div>
//    </div>
//</section>