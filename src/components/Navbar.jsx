import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    const [isLightMode, setIsLightMode] = useState(
        () => localStorage.getItem("theme") === "light"
    );

    useEffect(() => {
        document.body.classList.toggle("light-theme", isLightMode);
        localStorage.setItem("theme", isLightMode ? "light" : "dark");
    }, [isLightMode]);

    return(
        <nav className="navbar">
            <div className="nav-links">
                <Link to = "/">Home</Link>
                <Link to = "/books">Browse Books</Link>
                <Link to = "/add-book">Add Books</Link>
            </div>

            <label className="theme-switch">
                <input
                    type="checkbox"
                    checked={isLightMode}
                    onChange={() => setIsLightMode((current) => !current)}
                />
                <span className="theme-slider"></span>
                <span className="theme-text">Light</span>
            </label>

        </nav>
    );
}

export default Navbar;
