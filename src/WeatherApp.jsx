import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp() {
    const [weatherInfo,setweatherInfo] = useState({
         city:"Delhi",
        feelsLike: 24,
        temp: 25,
        tempMin: 23,
        tempMax: 26,
        humidity: 43.6,
        weather: "haze",
    })

       let updateInfo = (result)=>{
        setweatherInfo(result);
    }

    return (
        <div style={{textAlign:'center'}}>
            <h2>Weather App by Vedant Nikam</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}