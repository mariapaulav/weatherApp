import React from "react";
import './About.css'
import { Link } from 'react-router-dom';

export default function About(){
    return (
        <div className="about">
            <p> Hi! I'm Maria and this is my first project in my developer career. </p>
            <p>This app was built using React JS and a weather Api.</p>
            <i class="fa-solid fa-rainbow"></i>
            <Link to = '/'>
            <h3 className="home">Go Home</h3>
            </Link>
        </div>
    )
}