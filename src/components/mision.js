import React from 'react';
import Astronomy from '../assets/astronomy.jpg';
import Header from './header';
import Footer from './footer';

const Mision = () => {
  return (
    <div>
      <Header />
      <section>
        <div class="container">
          <p class="title">NUESTRA EDICIÓN</p>
          <p class="subtitle">Crear sinergias entre editores, ilustradores y escritores</p>
        </div>

        <div class="mision-content">
          <img src={Astronomy} alt="imagen de la mision" />
          <p class="paragraph">Gnomo errante es una editorial integrada por amigues de la Carrera de Edición (Universidad de Buenos Aires). El objetivo final de cada una de nuestras convocatorias es generar un producto editorial en donde distintas narrativas de autores dialoguen con las ilustraciones de distintos artistas. Para lograrlo crearemos sinergia entre escritores, artistas y editores para que el libro sea una pieza diferente, colaborativa y artesanal.
            <br/><br/>Nuestra misión es romper la burocracia del primer contacto editorial, trabajando codo a codo con los distintos actores que involucran este ámbito cultural y así poder ser la casa de los próximos artistas referentes en la industria
          </p>
        </div>
      </section>
      <Footer />
    </div>
   );
}

export default Mision;