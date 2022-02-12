import React from 'react'
import Companies from '../../components/HomePage/companies/Companies'
import Header from '../../components/HomePage/header/Header'

import WelcomeSection from '../../components/HomePage/welcomeSection/WelcomeSection'
import WhyUs from '../../components/HomePage/Whyus/WhyUs'
import LoginPage from '../../components/Loginpage/LoginPage'


//Styles
import "./style.scss"

const Home = () => {
    return (
        <div className='home-page'>
            <Header my = "My" jobs= 'jobs' connect = 'Login/Signup' />
            <WelcomeSection />
            <div className="cards">
                <div className="title1">Why Us</div>

                <div className="why-section">
                    <WhyUs title='Get More Visibility' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' />
                    <WhyUs title='Get More Visibility' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' />
                    <WhyUs title='Get More Visibility' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' />
                </div>
            </div>
            <div className="companies">
                <div className="title1">Companies Who Trust Us</div>
                <div className="row1">
                    <Companies source={require('../../assets/images/solaytic.png')} />
                    <Companies source={require('../../assets/images/kanba.png')} />
                    <Companies source={require('../../assets/images/lighting.png')} />
                    <Companies source={require('../../assets/images/ztos.png')} />
                    <Companies source={require('../../assets/images/kanba.png')} />

                </div>
                <div className="row2">
                    <Companies source={require('../../assets/images/solaytic.png')} />
                    <Companies source={require('../../assets/images/kanba.png')} />
                    <Companies source={require('../../assets/images/lighting.png')} />
                    <Companies source={require('../../assets/images/ztos.png')} />


                </div>
            </div>


        

        </div>
    )
}

export default Home