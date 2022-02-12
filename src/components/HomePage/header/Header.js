import React from 'react'

import { Link } from 'react-router-dom'
import LoginPage from '../../Loginpage/LoginPage'

// styles
import "./style.scss"

const Header = (props) => {

    return (
        <header className='header'>
            <nav className="navbar">

                <div className="logo">
                    <h1><span>{props.my}</span><span> {props.jobs}</span></h1>
                </div>


                <Link to='/login-signup' element={<LoginPage />} >
                    {props.connect}
                </Link>
            </nav>

        </header>

    )
}

export default Header