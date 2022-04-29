import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import './Nav.css';




function Nav({onSearch}) {
  return (
    <nav className='cont'>
      <Link to = '/'> 
      <span className='titleapp'>Weather app <i class="fa-solid fa-cloud-sun"></i></span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
         <Link to = '/about'>
      <span className='about' >About</span>
      </Link>
    </nav>
  );
};

export default Nav;
