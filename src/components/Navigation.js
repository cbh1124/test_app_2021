import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return(
        <div className='nav'>
            <Link to ='/'> Home</Link>
            <Link to = '/about'>About</Link>
        </div>
    );
    
}


/*
function Navigation() {
    return(
        <div>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
        </div>
    );
    
}

 */
export default Navigation;