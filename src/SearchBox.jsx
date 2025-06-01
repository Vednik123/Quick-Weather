import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    
    let getWeatherInfo = async()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city:city,
            temp:jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    }

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let info = await getWeatherInfo();
        updateInfo(info);
    }


    return(
        <div className='SearchBox'>
            <form action=""  onSubmit={handleSubmit}>
                 <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br /><br />
                 <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}