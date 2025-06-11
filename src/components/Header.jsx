import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-menu">
        <ul>
          <li><a href="#inicio">INICIO</a></li>
          <li><a href="#sobre">SOBRE</a></li>
          <li><a href="#portfolio">PORTFÓLIO</a></li>
          <li><a href="#contato">CONTATO</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
