import React from 'react';
import Cancel from '../assets/cancel.svg';
import Facebook from '../assets/facebook-logo-button.svg';
import Linkedin from '../assets/linkedin-button.svg';
import Twitter from '../assets/twitter-logo-button.svg';


const Footer = () => {
  return (
    <footer>

      <div className="x">
          <img src={Cancel} alt="imagen decorativa" height="16px" width="16px" />
      </div>

      <div className="footer">

      <div className="footer-text">
        <span>2019. Creado con amor y paciencia</span>
      </div>

        <div className="icons-social-media">
          <img src={Facebook} alt="facebook" height="37px" width="37px" />
          <img src={Linkedin} alt="linkedin" height="37px" width="37px" />
          <img src={Twitter} alt="twitter" height="37px" width="37px" />
      </div>

      </div>

    </footer>
   );
}

export default Footer;