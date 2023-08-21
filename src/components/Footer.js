import React from 'react';

import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  var cop_text = "© " + new Date().getFullYear() + " «ValorAid Network». Усі права захищені.";
  return (
    <footer className="text-center text-white foot-top">
      <div className="container">
        <section className="mt-5">
          <div className="row text-center d-flex justify-content-center pt-5">
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold lat">
                <Link to="/about" className="text-white">Про фонд</Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold lat">
                <Link to="/staff" className="text-white">Склад фонду</Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold lat">
                <Link to="/fundraisings" className="text-white">Збори</Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold lat">
                <Link to="/results" className="text-white">Звіти</Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold lat">
                <Link to="/contacts" className="text-white">Контакти</Link>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold lat">
                <Link to="/faq" className="text-white">FAQ</Link>
              </h6>
            </div>
          </div>
        </section>
        <hr className="my-5" />
        <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p className='rob'>
                Разом ми можемо змінити Україну на краще. Долучайтеся до нас у нашій місії добра та підтримки!
              </p>
            </div>
          </div>
        </section>
        <section className="text-center mb-5">
          <Link to="https://www.youtube.com/channel/UCya7l0Wl8SqlLCl5Jh3J04A" className="text-white me-4">
            <i className="fab fa-youtube"></i>
          </Link>
          <Link to="https://t.me/ndrtprv" className="text-white me-4">
            <i className="fab fa-telegram"></i>
          </Link>
          <Link to="https://www.linkedin.com/in/andrii-toporov-465829264/" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to="https://github.com/ndrtprv" className="text-white me-4">
            <i className="fab fa-github"></i>
          </Link>
        </section>
      </div>
      <div className="text-center p-3 foot-back">
        {cop_text} Розроблено <Link to="https://github.com/ndrtprv" className="text-white">Andrii Toporov</Link>
      </div>
    </footer>
  );
}

export default Footer;