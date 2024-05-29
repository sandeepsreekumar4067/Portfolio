import "../style/navbar.css";
import React from "react";

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return ( 
        <div className="navbar-container">
            <div className="navbar-name">
                &lt; <span>Sandeep</span> /&gt;
            </div>
            <div className="navbar-buttons">
                <input type="button" value="Home" onClick={() => scrollToSection("home")} />
                <input type="button" value="About" onClick={() => scrollToSection("about")} />
                <input type="button" value="Connect" onClick={() => scrollToSection("connect")} />
            </div>
        </div>
     );
}

export default Navbar;
