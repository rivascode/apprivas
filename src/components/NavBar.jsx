import React from 'react';
import '../App.css';

export const NavBar = () => {
    return (
        <ul>
            <div className="main">
                <li className='li'><a href="#home">Home</a></li>
                <li className='li'><a href="#news">Productos</a></li>
                <li className='li'><a href="#compras"> Ir a Compras</a></li>
            </div>
            
            <div className="left">
            <li className='li'><a href="#contact">Contact</a></li>
            <li className='li'><a className="log-out" href="#about">Salir</a></li>
            </div>
        </ul>
    )
};

