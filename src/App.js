import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './components/index';
import Somos from './components/somos';
import Mision from './components/mision';
import Contacto from './components/contacto';
import Filled from './assets/filled.svg';
import Modal from './components/modal';

class App extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <div>
        <div className={this.state.isOpen ? "menu_bar" : "menu-bar-flex"}>
          <img src={Filled} onClick={(e) => this.setState({ isOpen: true})} alt="boton de menu de navegacion" height="18px" width="18px" />
        </div>
        <Router>
          <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false})}/>
          <div>
            <Route exact path="/" component={Index} />
            <Route path="/somos" component={Somos} />
            <Route path="/mision" component={Mision} />
            <Route path="/contacto" component={Contacto} />
          </div>
        </Router>
    </div>
    );
  }
}

export default App;
