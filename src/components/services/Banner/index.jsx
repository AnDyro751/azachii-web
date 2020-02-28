import React, { useContext } from 'react';
import classnames from 'classnames';
import ThemeContext from '../../../contexts/Theme';
import styles from './styles.module.css';

function Banner() {
  const { dark } = useContext(ThemeContext);

  const mainClass = classnames({
    'row u__no_margin align-items-center justify-content-center': true,
    [styles.main]: true,
    black_color: dark,
  });
  const titleClass = classnames({
    main_font: true,
    [styles.service_page_title]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const messageClass = classnames({
    [styles.service_page_message]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });

  return (
    <div className={mainClass}>
      <div className="col-11 col-lg-12 u__no_padding">
        <div className="row u__no_margin">
          <div className="col-xl-6 offset-xl-1 col-12 u__no_padding">
            <h1 className={titleClass}>
              Un proceso basado en colaboración
            </h1>
            <div className="separator" />
            <p className={messageClass}>
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
