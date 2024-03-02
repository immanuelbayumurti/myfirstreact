import React from 'react'


const WeatherCard = (props) => {
  const {name, temperature, humidity} = props;
  return (
    <div className='w-full min-h-full bg-cyan-300/20 border rounded-md'>
      <h1 className='text-white ml-2 font-base text-lg'>{name}</h1>
      <img src="img/cloudy weather.PNG" alt="" />
      <div className='flex-col text-center'>
      <h1>Temperature</h1>
      <p>{temperature}</p>
      <h2>Humidity</h2>
      <p>{humidity}</p>       
      </div>
    </div>
  )
};

export default WeatherCard