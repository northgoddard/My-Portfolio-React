import React, {useState} from "react";
import '../App.css';
import About from "./about";
import Projects from "./projects";
import Navbar from "./navbar";
import Contact from "./contact";

function Page() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default Page;