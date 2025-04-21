import { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

function Menu() {


  return (
    <nav className="c-menu">
    <Link to="/">Lista</Link>
    <Link to="/capturados">Capturados</Link>
    <Link to="/aleatorios">Aleatorios</Link>
    <Link to="/usuarios">Usuarios</Link>
    <Link to="/favoritos">Favoritos</Link>
  </nav>
)
}

export default Menu