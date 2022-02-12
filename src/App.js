import React from 'react'
import { AppRouter } from './AppRouter'
//Styles
import "./styles/App.scss"

export const App = () => {
  return (
    <div className='app-container'>
        <AppRouter/>
    </div>
  )
}
