import React from 'react';
import Ami from '../assets/Ami.png';
import Danny from '../assets/Danny.png';
import Lucas from '../assets/Lucas.png';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Somos = () => {
  return (
    <div>
      <Header />
      <section>

      <div class="container">
        <p class="title">Quiénes somos</p>
      </div>

      <div class="somos-content">

        <div class="subtitle-content">
          <p class="ami">Ami</p>
        </div>

        <div class="content">
          <img class="img" src={Ami} alt="imagen de la mision" />
          <span>
          Un poco distraída, de mala memoria y de fanática de El señor de los anillos son los ingredientes que caracterizan a Ami. Estudió Edición en la Universidad de Buenos Aires y se desempeña como correctora de textos. También pasó por el Conservatorio Superior de Música Manuel de Falla. En sus ratos libres es cantante profesional de ducha y escribe poesía. Amante de novelas gráficas y memes. Su lema es “Siempre geek, nunca nerd”.
          </span>
        </div>

        <div class="subtitle-content">
          <p class="lucas">Lucas</p>
        </div>

        <div class="content">
          <img class="img" src={Lucas} alt="imagen de la mision" />
          <span>
          Cuando no está trabajando, a Lucas lo ataca la lumbalgia o la neurosis. Claro workaholic y, a veces, un poco mandón. Estudió Edición y Letras en la Universidad de Buenos Aires, y se desarrolla como editor digital. Fanático enfermizo de Doctor Who y Rocky Horror. Melómano y Cinéfilo… y ya que estamos, Erudito. Según su DNI, nació en el 96, pero sospechamos que tiene 80 y se baña formol. En su tiempo libre toca la guitarra y el teclado.
          </span>
        </div>

        <div class="subtitle-content">
          <p class="dani">Dani</p>
        </div>

        <div class="content">
          <img class="img" src={Danny} alt="imagen de la mision" />
            <span>
            Frontal, organizada e intensa. Amante de la tecnología, de los videojuegos y de la cultura japonesa. Estudió Edición en la Universidad de Buenos Aires y se capacita constantemente en la Universidad Tecnológica Nacional. Trabaja como programadora y lleva adelante proyectos sobre accesibilidad. Si hacen silencio, pueden escuchar cómo llora por la separación de Arashi. Y si la dejan sola un segundo, se tiñe el pelo de tres colores distintos.
            </span>
        </div>
    </div>

    </section>
    <Footer />
  </div>
   );
}

export default Somos;