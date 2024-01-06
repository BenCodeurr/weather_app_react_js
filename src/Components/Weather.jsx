import './Weather.css'

import wind_icon from '../Assets/wind.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import search_icon from '../Assets/search.png';
import snow_icon from '../Assets/snow.png';
import rain_icon from '../Assets/rain.png';
import clear_icon from '../Assets/clear.png';
import { useState } from 'react';


export const Weather = () => {
    let api_key = '64e27350a7f1134f0c9bfd6d95c4f1a8';

    const [weatherIcon, setWeatherIcon] = useState(cloud_icon);

    const search = async () =>{
        const city = document.getElementsByClassName('city');
        if(city[0].value === ""){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url)
        let data = await response.json();

        let humidity = document.getElementsByClassName('humidity');
        let wind = document.getElementsByClassName('wind');
        let temperature = document.getElementsByClassName('temp-display');
        let location = document.getElementsByClassName('location-display');

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n'){
            setWeatherIcon(clear_icon);
        }
        else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n'){
            setWeatherIcon(cloud_icon);
        }
        else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n'){
            setWeatherIcon(drizzle_icon);
        }
        else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n'){
            setWeatherIcon(drizzle_icon);
        }
        else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n'){
            setWeatherIcon(rain_icon);
        }
        else if(data.weather[0].icon === '10d' || data.weather[0].icon === '10n'){
            setWeatherIcon(rain_icon);
        }
        else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n'){
            setWeatherIcon(snow_icon);
        }
        else{
            setWeatherIcon(clear_icon);
        }
    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='city' placeholder='Enter a city'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>

        <div className="weather-image">
            <img src={weatherIcon} alt="" />
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