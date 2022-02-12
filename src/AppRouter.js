import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/aboutPage/About";
import Home from "./pages/homePage/Home";

export const AppRouter = () => {
    return (
        <div className="main-router-page">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                </Routes>
            </Router>
        </div>
    );
};
