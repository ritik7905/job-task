import React from 'react'
import Header from '../HomePage/header/Header'

// Styles
import "./style.scss"

const LoginPage = () => {
    return (
        <>
            <div className="data" style={{ backgroundColor: 'red' }}>
                <Header my="My" jobs='jobs' />
            </div>

        </>
    )
}

export default LoginPage;