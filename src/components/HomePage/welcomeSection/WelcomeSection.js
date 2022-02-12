import React from 'react'

// Images
import hero from "../../../assets/images/hero.png";
//Styles
import "./style.scss"

const WelcomeSection = () => {

    return (
        <div className="welcome_section">
            <div className="get-started">
                <p className="description">Welcome to</p>
                <h1 className="title1">
                    My<span>Jobs</span>
                </h1>
                <button>Get Started</button>
            </div>
            <div className="hero-img">
                <img src={hero} alt="" />
            </div>
        </div>
    )
}

export default WelcomeSection
