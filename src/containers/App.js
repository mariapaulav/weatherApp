import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import Ciudad from '../components/Ciudad';
import {Route, Switch} from 'react-router-dom';



const apiKey = '420cc9d9a8c66e57f9b3acc351e2183c';

function App() {
  const [cities, setCities] = useState([]); // cities es el estado // setCities -> la funcion para cambiar el estado // El valor de cities es lo que le pase a la ejecucion de useState
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min)/10,
            max: Math.round(recurso.main.temp_max)/10,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert('City not found');
        }
      });
  }
  function onFilter(ciudadId) { // funcion para encontrar ciudad puntual por id 
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId)); // cities es el estado donde nos ibamos guarfando las ciudades 
    if(ciudad.length > 0) { // como lo guardo en arreglo pregunto por el largo del arreglo 
        return ciudad[0]; // y muestro la ciudad que quedo en la posicion 0 del arreglo 
    } else {
        return 'Esta ciudad no se encuentra en la lista';
    }
  }

  return (
    <div className="App">
    
    <Route path = '/'>
      <Nav onSearch={onSearch}/> 
      </Route>

    <Switch>
      <Route exact path = '/'>
        <Cards
        cities={cities}
        onClose={onClose}
      />
      </Route>

        <Route path = '/about'>
        <About/>
      </Route>

      <Route path='/ciudad/:ciudadId'>
        { ({match}) => <Ciudad citym = {onFilter(match.params.ciudadId)}/>}
      </Route>

    </Switch>
    </div>
  );
}

export default App;
