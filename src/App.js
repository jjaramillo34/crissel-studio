import React, { useEffect, Suspense }  from 'react';

import AllRoutes from './router/AllRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import ReactGA from "react-ga";

const trackingId = "UA-208310918-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-back'
        });
    }, []);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AnimatedCursor
                innerSize={8}
                outerSize={8}
                color='193, 11, 111'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
            />
            <AllRoutes />
            <ToastContainer />
        </Suspense>
    );
}

export default App;

//import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
//import IndexPage from './pages/home';
//import AboutPage from './pages/about';
//import ServicesPage from './pages/services';
//import ContactPage from './pages/contact';
//import Appointment from './pages/booking';
//
//const App = () => {
//  return (
//      <Routes>
//        <Route path="/" element={<IndexPage />} />
//        <Route path="/about" element={<AboutPage />} />
//        <Route path="/services" element={<ServicesPage />} />
//        <Route path="/contact" element={<ContactPage />} />
//        <Route path="/appointment" element={<Appointment />} />
//      </Routes>
//  );
//}
//
//export default App;
