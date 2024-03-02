import { useState } from 'react'
import Navbar from './components/Navbar'
import WeatherBar from './components/WeatherBar'
import Background from '/img/Grass.jpg'

function App() {

  return (
    <>
    <div className='flex ' style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
      <Navbar />
      <WeatherBar />
      </div>
    
    </>
  )
}

export default App;
