import './Weather.css'

import wind_icon from '../Assets/wind.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import search_icon from '../Assets/search.png';
import snow_icon from '../Assets/snow.png';
import rain_icon from '../Assets/rain.png';
import clear_icon from '../Assets/clear.png';


export const Weather = () => {
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='input' placeholder='Enter a city'/>
            <div className="search-icon">
                <img src={search_icon} alt="" />
            </div>
        </div>

        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="temp-display">16°C</div>
        <div className="location-display">Accra</div>
        <div className="d-container">
            <div className="d-element">
                <img src={humidity_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity">60%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="d-element">
                <img src={wind_icon} alt="" className='icon' />
                <div className="data">
                    <div className="wind">13 km/h</div>
                    <div className="text">Wind</div>
                </div>
            </div>
        </div>
    </div>
  )
}