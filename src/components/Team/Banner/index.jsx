import React from 'react';
import styles from './style.module.css';

function Banner() {
  return (
    <div className="row u__no_margin align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="col-11 col-lg-10 u__no_padding">
        <div className="row u__no_margin">
          <div className="col-12 col-sm-9 col-lg-7 u__no_padding">
            <h1 className={`${styles.team_page_title} black_color_text main_font`}>
              Especialistas en soluciones digitales
            </h1>
            <div className="row u__no_margin">
              <div className="separator col-1 u__no_padding" style={{ width: '80%' }} />
            </div>
            <p className={`black_color_text ${styles.team_page_message}`}>
              Nuestros diseñadores e ingenieros saben que la colaboración es la base de todo proyecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
