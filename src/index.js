import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// App es el componente encargado de mostrar todos los demas componentes 
// Eligo como Wrapper para las rutas a BrowserRouter