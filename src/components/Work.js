import React from "react";

const data = [
    {
        image: "assets/images/how-it-works-1.png",
        title: "1. Descubre",
        description: "Busca los servicios de belleza que necesitas"
    },
    {
        image: "assets/images/how-it-works-2.png",
        title: "2. Reserva",
        description: "Elige tu servicio y reserva una cita directamente"
    },
    {
        image: "assets/images/how-it-works-3.png",
        title: "3. Disfruta",
        description: "Relajate y disfruta de tu experiencia de belleza"
    }
];

const Work = () => {
    return (
        <section className="how-it-works">
            <div className="container">
                <div className="row">
                    <div className="section-header clearfix">
                        <span>Enjoy Our Services</span>
                        <h2><strong>How It</strong> Works</h2>
                        <div className="section-break"></div>
                    </div>
                    <div className="section-content">
                        {data.map((item, index) => (
                            <div className="col-sm-4" key={index}>
                                <img src={item.image} alt={data.description}/>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;

//<div className="col-sm-4">
//    <img src="assets/images/how-it-works-1.png" alt="image"/>
//    <h3>1. Discover</h3>
//    <p>Search for beauty services <br/> you need</p>
//</div>
//<div className="col-sm-4">
//    <img src="assets/images/how-it-works-2.png" alt="image"/>
//    <h3>2. Book</h3>
//    <p>Choose your service and <br/> book an appointment directly</p>
//</div>
//<div className="col-sm-4">
//    <img src="assets/images/how-it-works-3.png" alt="image"/>
//    <h3>3. Enjoy</h3>
//    <p>Sit back and enjoy your <br/> unique beauty experience</p>
//</div>