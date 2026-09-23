import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Landmarks from './components/Landmarks'

const App = () => {

  return (
    <div className="App">
      <h1>Los Angeles Landmarks</h1>
      <Landmarks />
    </div>
  )
}

export default App

