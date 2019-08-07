import React from 'react';
import Niagara from '../assets/niagara.jpg';
import Cancel from '../assets/cancel.svg';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Gmail from '../assets/gmail.png';
import Header from './header';
import Footer from './footer';

const Index = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="main-container">
          <img src={Niagara} alt="imagen principal" />
          <p>
              Dessert muffin chocolate bar. Sweet roll marshmallow pudding carrot cake sweet pudding gummi bears caramels pudding. Lollipop icing lemon drops marzipan pastry. Brownie gingerbread cookie carrot cake tootsie roll croissant. Sweet roll toffee jelly cupcake. Carrot cake powder jelly beans cookie brownie. Ice cream cotton candy tart chocolate wafer. Jelly beans donut macaroon marzipan jujubes. Jelly beans lemon drops wafer brownie chupa chups muffin sweet roll. Bear claw ice cream oat cake.

              Cake macaroon chocolate bar. Biscuit pie liquorice lollipop jelly-o lollipop. Cheesecake gummies carrot cake bear claw carrot cake chocolate bar. Candy canes bear claw pastry cookie. Lemon drops chocolate cake apple pie oat cake apple pie topping. Cookie pie caramels biscuit jelly beans marzipan.

              Sesame snaps toffee pudding pastry pie cookie. Fruitcake powder croissant sweet bonbon macaroon pastry cheesecake. Sweet candy chocolate cake tootsie roll. Biscuit chocolate jujubes jujubes candy canes danish cheesecake candy canes fruitcake. Tiramisu brownie apple pie. Marzipan danish donut donut tootsie roll caramels halvah marshmallow. Pudding topping candy canes bonbon topping croissant tart pastry. Cake dragée pudding lemon drops. Cotton candy danish chupa chups cake.

              Oat cake candy toffee cheesecake. Jujubes lollipop sweet roll gummi bears jujubes macaroon tart icing. Candy canes cupcake marzipan. Jelly beans gummi bears croissant marzipan. Lollipop halvah donut muffin ice cream chocolate pastry gingerbread sesame snaps. Apple pie bonbon lemon drops gingerbread sweet roll sweet roll chupa chups. Chocolate jelly cupcake. Cheesecake halvah cotton candy cake bear claw. Sweet jelly beans pastry cookie topping. Tart liquorice jelly beans.

              Sugar plum croissant chocolate tart lollipop. Brownie sweet ice cream halvah pudding jelly muffin dessert. Jelly beans pudding gummies. Cookie lemon drops bonbon macaroon gingerbread jujubes gummi bears. Pudding biscuit pastry. Soufflé carrot cake pie wafer croissant brownie danish cupcake icing.
          </p>
        </div>
      </section>

      <div className="x">
        <img src={Cancel} alt="imagen decorativa" height="16px" width="16px" />
        <img src={Cancel} alt="imagen decorativa" height="16px" width="16px" />
        <img src={Cancel} alt="imagen decorativa" height="16px" width="16px" />
      </div>

      <div className="social-media-items">
        <div className="social-media-item">
          <img src={Facebook} alt="imagen de la red social facebook" />
          <div className="social-media-text">
            <p>seguinos en</p>
            <p className="sm">FACEBOOK</p>
          </div>
        </div>

        <div className="social-media-item">
        <img src={Instagram} alt="imagen de la red social instagram" />
          <div className="social-media-text">
            <p>seguinos en</p>
            <p className="sm">INSTAGRAM</p>
          </div>
        </div>

        <div className="social-media-item">
        <img src={Gmail} alt="imagen de correo electrónico gmail" />

          <div className="social-media-text">
            <p>contactanos</p>
            <p className="sm">POR EMAIL</p>
            <small>EDICIONESGNOMOERRANTE@GMAIL.COM</small>
          </div>
        </div>

      </div>

      <Footer />
    </div>
   );
}

export default Index;