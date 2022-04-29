import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');// inicializo el valor de mi estado en un strng vacio
  return (
    <form className="position"
     onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity(''); // para que se borre el contenido del input
    }}>
      <input
        className='inputBox'
        type="text"
        placeholder='  Enter city name . . . '
        value={city}
        onChange={e => setCity(e.target.value)} // para acceder a lo que escriba el usuario 
      />
      <input className='btn text' type="submit" value="Search" />
    </form>
  );
}
