import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css'

const tabs = [
    { 
        id: "services-1", 
        name: "Tab 1", 
        content: "Tab 1 content", 
        active: true, 
        icon: "fa fa-magic" ,
        title: "Maquillaje de Cara",
        title_tab : "Tratamiento de Maquillaje de Cara",
        description: "Nosotros les ofrecemos un servicio de maquillaje profesional para todo tipo de eventos, ya sea para una boda, una fiesta de graduación, una fiesta de disfraces, una fiesta de Halloween, una fiesta de cumpleaños, una fiesta de Navidad, una fiesta de Año Nuevo, una fiesta de San Valentín, una fiesta de San Patricio, una fiesta de Pascua, una fiesta de Acción de Gracias,",
        options: [
            { option : "Maquillaje de cara para novias" },
            { option: "Maquillaje de cara para fiestas" },
            { option: "Maquillaje de cara para Halloween" },
            { option: "Maquillaje de cara para cumpleaños" },
            { option: "Maquillaje de cara para Navidad" },
            { option: "Maquillaje de cara para Año Nuevo" },
            { option: "Maquillaje de cara para San Valentín" },
        ],
        class_icon: "fa fa-magic",
        img: "assets/images/maquillaje_cara.png",
        img_icon: "assets/images/face-icon.png"
    }, 
    {
        id: "services-2",
        name: "Tab 2",
        content: "Tab 2 content",
        active: false,
        icon: "fa fa-magic",
        title: "Maquillaje de Ojos",
        title_tab : "Tratamiento de Maquillaje de Ojos",
        description: "Nosotros les ofrecemos un sevicio de maquillaje profesionl de maquillaje de ojos para todo tipo de eventos, ya sea para una boda, una fiesta de graduación, una fiesta de disfraces, una fiesta de Halloween, una fiesta de cumpleaños, una fiesta de Navidad, una fiesta de Año Nuevo, una fiesta de San Valentín, una fiesta de San Patricio, una fiesta de Pascua, una fiesta de Acción de Gracias,",
        options: [
            { option: "Pestañas postizas" },
            { option: "Pestañas permanentes" },
            { option: "Pestañas de colores" },
            { option: "Pestañas pelo a pelo" },
            { option: "Pestañas de mink" },
            { option: "Pestañas de seda" },
            { option: "Pestañas de visón" },
            { option: "Pestañas de ardell" },

        ],
        class_icon: "face",
        img: "assets/images/maquillaje_ojos.gif",
        img_icon: "assets/images/eye-icon.png"
    },
    {
        id: "services-3",
        name: "Tab 3",
        content: "Tab 3 content",
        active: false,
        icon: "fa fa-magic",
        title: "Maquiaje Facial Tratamiento",
        title_tab : "Maquiaje Facial Tratamiento",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        options: [
            { option : "Maquillaje de Novia" },
            { option: "Maquillaje de Novia" },
            { option: "Maquillaje de Novia" },
            { option: "Maquillaje de Novia" },
        ],
        class_icon: "face",
        img: "assets/images/maquillaje_pelo.png",
        img_icon: "assets/images/hair-icon.png"
    },
    
];

const OurTabs = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="our-treatment">
            <div className="container">
                <div className="row">
                    <div className="section-header clearfix">
                        <span>Nosotros somos especialistas en Belleza</span>
                        <h2><strong>Nuestros servicios</strong> De Belleza</h2>
                        <div className="section-break"></div>
                    </div>
                    
                    <div className="col-md-12">
                        <Tabs selectedIndex={activeIndex} onSelect={(index) => setActiveIndex(index) } >
                            <TabList>
                                {tabs.map((tab, index) => (
                                    <Tab key={index} className={tab.active ? "active" : ""}>
                                        <img src={tab.img_icon} alt={tab.name}/>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href={`#${tab.id}`}>
                                                <h4>{tab.title}</h4>
                                                <span>Tratamiento</span>
                                            </a>
                                        </li>
                                    </Tab>
                                ))}
                            </TabList>
                            {tabs.map((tab, index) => (
                                <TabPanel key={index} className="tab-content">
                                    <br/>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab-img">
                                                <img src={tab.img} alt={tab.name}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tab-info">
                                                <h3>{tab.title}</h3>
                                                <p>{tab.description}</p>
                                                <ul>
                                                    {tab.options.map((option, index) => (
                                                        <li key={index}>
                                                            <i className={tab.class_icon}></i>
                                                            {option.option}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <a href="#" className="btn btn-primary">Leer más</a>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            ))}
                        </Tabs>
                    </div>
                        
                    
                </div>
            </div>
        </section>
    )
}

export default OurTabs;


//<TabsComponent>
//    <TabList>
//        {tabs.map((tab, index) => (
//            <Tab key={index} className={tab.active ? "active" : ""}>
//                <img src={tab.img_icon} alt={tab.name}/>
//                <li className="nav-item">
//                    
//                    <a className="nav-link" data-toggle="tab" href={`#${tab.id}`}>
//                        <h4>{tab.title}</h4>
//                        <span>Tratamiento</span>
//                    </a>
//                </li>
//            </Tab>
//        ))}
//    </TabList>
//    {tabs.map((tab, index) => (
//        <TabPanel key={index} className="tab-content">
//            <br/>
//            <div className="row">
//                <div className="col-sm-6">
//                    <div className="tab-img">
//                        <img src={tab.img} alt="" />
//                    </div>
//                </div>
//                <div className="col-sm-6">
//                    <div className="tab-info">
//                        <h3>{tab.title}</h3>
//                        <p>{tab.description}</p>
//                        <ul>
//                            {tab.options.map((option, index) => (
//                                <li key={index}>
//                                    <i class="fa-solid fa-lips"></i>
//                                    {option.option}
//                                </li>
//                            ))}
//                        </ul>
//                        <a href="/about" className="primary-button">Learn More</a>
//                    </div>
//                </div>
//            </div>
//        </TabPanel>
//    ))}
//</TabsComponent>