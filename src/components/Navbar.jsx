import React from 'react'
import Clock from '../assets/Utils/Clock'
import Day from '../assets/Utils/Day';

// Maksud hati ingin mengambil data dari api tapi ga berhasil
// let api_key ="91d3988c4d3d20bd638d0648defe2c45";
// let city_name="Bali";

const Navbar = () => {
    // let api_key ="91d3988c4d3d20bd638d0648defe2c45";
    // let city_name="Bali";
    // const GetData = () => {
    //     const [dataWeather, setDataWeather] = useState([]);
    //     const [search, setSearch] = useState('');
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=Metric&appid=${api_key}`);
    //             setDataWeather(response.data);
    //         } catch (error){
    //             console.error('Error Fetching Data', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();      
    // }), [];   

  return (
    <>
    <div className='w-1/3 p-4 mx-4 my-6 min-h-full border bg-lime-600/30'>
    <div className='text-white w1/4 flex'>
    <form className="group relative" >
      <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 cursor-pointer group-focus-within:text-blue-500"  >
        <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" placeholder="Input City..."/>
    </form>
    </div >
    <div className='text-white mt-4'>
      <Clock className=''/> 
      <Day />
      <h1 className='text-center text-3xl'>Canggu</h1>
      <img src="/img/sun weather.PNG" alt="" />
      <div className='text-center text-2xl'>
      <h1>Temperature<span id='temperature'>22°C</span></h1>
      <h1>Humidity<span id='humidity'>80%</span></h1>
      </div>
    </div>

    </div>
    
    </>
  )
  };

export default Navbar