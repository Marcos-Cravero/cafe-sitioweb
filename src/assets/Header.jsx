import React from 'react';

// Muestra el nombre de la cafetería y el menú de navegación
const Header = () => {
  return (
    <header>
      <h1>Cafetería</h1>
      <nav>
        <ul>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#menu">Menú</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

