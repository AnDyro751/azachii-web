import React from 'react';
import styles from './styles.module.css';

function Banner() {
  return (
    <div className={`row u__no_margin align-items-center justify-content-center ${styles.main}`}>
      <div className="col-11 col-lg-12 u__no_padding">
        <div className="row u__no_margin">
          <div className="col-xl-6 offset-xl-1 col-12 u__no_padding">
            <h1 className={`${styles.service_page_title} black_color_text main_font`}>
              Un proceso basado en colaboración
            </h1>
            <div className="separator" />
            <p className={`${styles.service_page_message} black_color_text`}>
              Nuestros servicios de diseño, producción multimedia e ingeniería
              son transparentes y flexibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
