import React from 'react';
import Cancel from '../assets/cancel.svg';
import Logo from '../assets/gnomoerrantelogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>

      <div className="logo">
        <img src={Cancel} alt="imagen decorativa" height="16px" width="16px" />
        <img className="img-logo" src={Logo} alt="logo de la pagina" />
        <img src={Cancel} alt="imagen decorativa" height="16px" width="16px" />
      </div>

      <nav className="nav-content">
        <ul className="nav">

            <li className="item">
                <Link to="/" className="link">INICIO</Link>
            </li>

            <li className="item">
                <Link to="/somos" className="link" target="_blank">¿Quienés Somos?</Link>
            </li>

            <li className="item">
              <Link to="/mision" className="link" target="_blank">Nuestra misión</Link>
            </li>

            <li className="item">
                <Link to="/contacto" className="link" target="_blank">Contacto</Link>
            </li>

        </ul>
      </nav>
  </header>
   );
}

export default Header;