import React, { useState, useEffect } from 'react'

const WeatherCard = ({ weatherInfo }) => {
    const [weatherState, setWeatherState] = useState('');

    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        city,
        speed,
        country,
        sunset
    } = weatherInfo;

    let sunsetSec = sunset * 1000;
    let date = new Date(sunsetSec);
    let sunsetTime = `${date.getHours()}:${date.getMinutes()}`;

    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Haze":
                    setWeatherState("wi wi-day-haze");
                    break;
                case "Clouds":
                    setWeatherState("wi wi-day-cloudy");
                    break;
                case "Rain":
                    setWeatherState("wi wi-day-rain");
                    break;
                case "Snow":
                    setWeatherState("wi wi-day-snow");
                    break;
                case "Dust":
                    setWeatherState("wi wi-dust");
                    break;
                case "Drizzle":
                    setWeatherState("wi wi-day-sprinkle");
                    break;
                case "Fog":
                    setWeatherState("wi wi-fogg");
                    break;
                case "Smoke":
                    setWeatherState("wi wi-smoke");
                    break;
                case "Tornado":
                    setWeatherState("wi wi-tornado");
                    break;
                default:
                    setWeatherState("wi wi-day-sunny");
            }
        }


    }, [weatherMood]);

    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={weatherState}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{parseFloat(temp).toFixed(1)}&deg;</span>
                    </div>

                    <div className='description'>
                        <div className='weatherCondition'>
                            {weatherMood}
                        </div>
                        <div className='place'>
                            {city}, {country}
                        </div>
                    </div>
                </div>

                <div className='date'>
                    {new Date().toLocaleString()}
                </div>

                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-sunset'></i></p>
                            <p className='extra-info-leftside'>{sunsetTime} <br /> Sunset</p>
                        </div>

                        <div className='two-sided-section'>
                            <p><i className='wi wi-humidity'></i></p>
                            <p className='extra-info-leftside'>{humidity} <br /> Humidity</p>
                        </div>
                    </div>

                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-sunset'></i></p>
                            <p className='extra-info-leftside'>{pressure} <br /> Pressure</p>
                        </div>

                        <div className='two-sided-section'>
                            <p><i className='wi wi-rain'></i></p>
                            <p className='extra-info-leftside'>{speed} <br /> Speed</p>
                        </div>
                    </div>
                </div>


            </article>
        </>
    )
}

export default WeatherCard