import React, { useContext } from 'react';
import classnames from 'classnames';
import ThemeContext from '../../../contexts/Theme';
import styles from './style.module.css';

function Banner() {
  const { dark } = useContext(ThemeContext);

  const mainClass = classnames({
    'row u__no_margin align-items-center justify-content-center': true,
    black_color: dark,
  });
  const titleClass = classnames({
    [styles.team_page_title]: true,
    main_font: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const separatorClass = classnames({
    'separator col-1 u__no_padding': true,
    black_color: !dark,
    white_color: dark,
  });
  const messageClass = classnames({
    [styles.team_page_message]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });

  return (
    <div className={mainClass} style={{ height: '100vh' }}>
      <div className="col-11 col-lg-10 u__no_padding">
        <div className="row u__no_margin">
          <div className="col-12 col-sm-9 col-lg-7 u__no_padding">
            <h1 className={titleClass}>
              Especialistas en soluciones digitales
            </h1>
            <div className="row u__no_margin">
              <div className={separatorClass} />
            </div>
            <p className={messageClass}>
              Nuestros diseñadores e ingenieros saben que la
              {' '}
              colaboración es la base de todo proyecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
