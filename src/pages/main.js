import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from "./body_sections/About";
import Home from "./body_sections/Home";
import Contact from "./body_sections/Contact";
import Facilities from "./body_sections/Facilities";
import Rates from "./body_sections/Rates";


function Main() {

    return (
        <div className="">
            <Header id="header" />
            <Routes className="min-h-[50vh]">
                <Route path="/" element={<Home />} exact />
                <Route path="about" element={<About />} exact />
                <Route path="contact" element={<Contact />} exact />
                <Route path="facilities" element={<Facilities />} exact />
                <Route path="rates" element={<Rates />} exact />
            </Routes>

            <Footer />
        </div>
    );
}

export default Main;