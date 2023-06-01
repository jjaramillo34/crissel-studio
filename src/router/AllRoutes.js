import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../views/all-home-views/Home";
import NotFound from "../views/NotFound";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/about";
import ServicesPage from "../pages/services";
import ContactPage from "../pages/contact";
import AppointmentPage from "../pages/booking";

const AllRoutes = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/appointment" element={<AppointmentPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
        </>
    )
}

export default AllRoutes;