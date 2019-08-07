import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Facebook from '../assets/facebook-logo-button.svg';
import Linkedin from '../assets/linkedin-button.svg';
import Twitter from '../assets/twitter-logo-button.svg';

class Contacto extends Component {
  state = {
    nombre: "",
    nombreError: "",
    email: "",
    emailError: ""
  };

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validate = () => {
    let isError = false;
    const errors = {
      nombreError: "",
      emailError: ""
    };

    if (this.state.nombre.length < 3) {
      isError = true;
      errors.nombreError = "El nombre debe contener al menos 3 carácteres";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Ingrese un email válido";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  }

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        nombre: "",
        nombreError: "",
        email: "",
        emailError: ""
      });
    }
  };


  render() {
    return (
      <div>
        <Header />
        <section>

      <div className="container">
        <p className="title">CONTACTANOS</p>
      </div>

      <div className="contacto-content">

        <div className="form-content">
          <span className="form-content-title">No dejes pasar tu oportunidad en las convocatorias</span>
          <small className="form-content-details">Escribinos para bases y condiciones</small>

          <div className="icons-social-media-form">
            <img src={Facebook} alt="facebook" height="37px" width="37px" />
            <img src={Linkedin} alt="linkedin" height="37px" width="37px" />
            <img src={Twitter} alt="twitter" height="37px" width="37px" />
          </div>

        </div>

              <form className="form" action="">
                <label htmlFor="name">Nombre*</label>
                <input
                  name="nombre"
                  value={this.state.nombre}
                  onChange={e => this.change(e)}
                  type="text"
                  id="name"
                  minLength="3"
                  maxLength="12"
                  required
                  />
                  <small className="error">{this.state.nombreError}</small>
                <label htmlFor="email">Email*</label>
                <input
                  name="email"
                  value={this.state.email}
                  onChange={e => this.change(e)}
                  type="email"
                  id="email"
                  required
                  />
                  <small className="error">{this.state.emailError}</small>
                <label htmlFor="asunto">Asunto</label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  />
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                >
                </textarea>
                <input
                  type="submit"
                  onClick={e => this.onSubmit(e)}
                  value="Enviar"
                  />
              </form>

    </div>


    </section>


        <Footer />
      </div>
    );
  }
}

export default Contacto;