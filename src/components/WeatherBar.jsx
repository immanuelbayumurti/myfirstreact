import React from 'react'
import WeatherCard from './WeatherCard';

// Maksud hati ingin membuat laporan cuaca secara random tapi blm nemu logicnya
const WeatherBar = () => {
  return (
    <div className='text-white grid grid-cols-3 gap-3 w-2/3 p-4 mx-4 my-6 min-h-screen border bg-lime-700/30'>
      <WeatherCard name="Bali" temperature="30°C" humidity="80%"/>
      <WeatherCard name="Bogor" temperature="22°C" humidity="75%" />
      <WeatherCard name="Jakarta" temperature="30°C" humidity="80%" />
      <WeatherCard name="Bandung" temperature="18°C" humidity="60%" />
      <WeatherCard name="Solo" temperature="29°C" humidity="80%" />
      <WeatherCard name="Jogjakarta" temperature="29°C" humidity="80%" />
      
    </div>
  )
}

export default WeatherBar;