import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Close from '../assets/close.svg';

class Modal extends Component {

  render() {
    let modal = (
      <React.Fragment>
        <nav className="nav-mobile">
        <div className="close">
          <img src={Close} onClick={this.props.onClose} alt="boton de cierre de menu de navegacion" height="16px" width="16px"/>
        </div>
        <ul className="nav-mb">

            <li className="item-mobile">
                <Link to="/" className="link-mobile">INICIO</Link>
            </li>

            <li className="item-mobile">
                <Link to="/somos" className="link-mobile" target="_blank">¿Quienés Somos?</Link>
            </li>

            <li className="item-mobile">
              <Link to="/mision" className="link-mobile" target="_blank">Nuestra misión</Link>
            </li>

            <li className="item-mobile">
                <Link to="/contacto" className="link-mobile" target="_blank">Contacto</Link>
            </li>

        </ul>
      </nav>
      </React.Fragment>

    );

    if (! this.props.isOpen) {
      modal = null;
    }
    return (
      <div>
        {modal}
      </div>
     );
  }
}

export default Modal;