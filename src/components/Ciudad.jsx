import React from "react";
//import {useParams} from 'react-router-dom'
import './Ciudad.css'
import { Link } from 'react-router-dom';

export default function Ciudad({citym}) {
    
    return (
        <div className="ciudad">
                    <h2 className="title2">{citym.name}</h2>
                    <div className="info">
                        <div>Temperature: {Math.round(citym.temp)/10} ºC</div>
                        <div>Weather: {citym.weather}</div>
                        <div>Wind: {citym.wind} km/h</div>
                        <div>CLouds: {citym.clouds}</div>
                        <div>latitude: {citym.latitud}º</div>
                        <div>Longitude: {citym.longitud}º</div>
                        <img className="img" src={`http://openweathermap.org/img/wn/${citym.img}@2x.png`} alt="" />
            </div>
            <Link to = '/'>
            <h3 className="home">Go Home</h3>
            </Link>
           
        </div>

       
    )
}