import React, { useState, useEffect } from 'react';
import './style.css';
import WeatherCard from './WeatherCard';

// const apiKey = '73018d27b8cf6d40a8e5e74047bfd1e6';
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;


const Temp = () => {
    const [searchValue, setSearchValue] = useState('karachi');
    const [weatherInfo, setWeatherInfo] = useState({});

    const getWeatherInfo = async () => {
        if (searchValue !== '') {
            try {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`;

                const response = await fetch(url);
                const data = await response.json();

                const { temp, humidity, pressure } = data.main;
                const { main: weatherMood } = data.weather[0];
                const { name: city } = data;
                const { speed } = data.wind;
                const { country, sunset } = data.sys;

                const myNewWeatherInfo = {
                    temp,
                    humidity,
                    pressure,
                    weatherMood,
                    city,
                    speed,
                    country,
                    sunset
                }

                setWeatherInfo(myNewWeatherInfo);

                // console.log(city);
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])


    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input
                        type="search"
                        placeholder='search...'
                        autoFocus
                        id='search'
                        className='searchTerm'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button className='searchButton' type='button' onClick={() => getWeatherInfo()}>
                        Search
                    </button>
                </div>
            </div>

            {/* our temperature card */}
            <WeatherCard weatherInfo={weatherInfo} />
        </>
    )
}

export default Temp