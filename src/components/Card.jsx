/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
  return (
    <div className= 'bgColor card'>

    <div className='closeIcon'>
      <button onClick={onClose} className='closeIcon2'>X</button>
    </div>

    <NavLink to = {`/ciudad/${id}`}>
    <h3 className='title1'>{name}</h3> 
    </NavLink>

    <div className='card-body'>

      <div className='temp-body'> 
        <p className='bold'>Max</p>  
        <p>{max}°</p>
      </div>

      <div className='temp-body'>
        <p className='bold'>Min</p>
        <p>{min}°</p>
      </div>

    <img className='imgM' src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="image not found :(" />

    </div>
  </div>
  );
};

