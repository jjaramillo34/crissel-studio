import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Homepage from "../../pages/HomePage";
import AboutPage from "../../pages/about";
import ServicesPage from "../../pages/services";
import ContactPage from "../../pages/contact";
import Appointment from "../../pages/booking";
import Header from "../../components/Header";

const Home = () => {
    return (
        <div className="home">
            <Tabs>
                <TabList>
                    <Header />
                </TabList>
                <TabPanel>
                    <Homepage />
                </TabPanel>
                <TabPanel>
                    <AboutPage />
                </TabPanel>
                <TabPanel>
                    <ServicesPage />
                </TabPanel>
                <TabPanel>
                    <ContactPage />
                </TabPanel>
                <TabPanel>
                    <Appointment />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Home;