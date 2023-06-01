import React from "react";
import ServiceAnimation from "../services/ServiceAnimation";

const data = [
    {
        id: 1,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        icon: "flaticon-002-caliper"
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        icon: "flaticon-004-build"
    },
    {
        id: 3,
        title: "Mobile Application",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        icon: "flaticon-003-puzzle"
    }
]


const TextAnimation = () => {
    return (
        <section className="services-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2> <strong>Nuestros</strong> Servicios</h2>
                    <div className="bar"></div>
                    <p>
                        Nuestros servicios son los siguientes:
                    </p>
                </div>
                {data.map((item) => (
                    <ServiceAnimation text={item.title} />
                    
                ))}
                {data.map((item) => (
                    <ServiceAnimation text={item.description} />
                ))}
            </div>
        </section>
    );
};

export default TextAnimation;