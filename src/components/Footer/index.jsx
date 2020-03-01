/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  FaInstagram, FaFacebookF, FaGithub, FaTwitter, FaLinkedin,
} from 'react-icons/fa';
import classnames from 'classnames';
import ThemeContext from '../../contexts/Theme';
import styles from './styles.module.css';
import Locations from '../Locations';

function Footer() {
  const { dark } = useContext(ThemeContext);

  const mainClass = classnames({
    'row u__no_margin justify-content-center': true,
    [styles.footer]: true,
    blue_light_color: !dark,
    red_color: dark,
  });
  const dividerClass = classnames({
    [styles.divider]: true,
    white_color: true,
  });
  const titleClass = classnames({
    [styles.title]: true,
    white_color_text: true,
  });
  const itemClass = classnames({
    'col-xl-auto col-12 u__no_padding_in_tablet white_color_text': true,
    [styles.separate_in_tablet]: true,
    [styles.item]: true,
  });

  return (
    <footer className={mainClass}>
      <div className="col-xl-10 col-11 u__no_padding">
        <div className={dividerClass} />
        <div className="row u__no_margin align-items-center">
          <div className="col-xl-2 col-12 u__no_padding u__small_margin_vertical">
            <h2 className={titleClass}>
              <Link to="/" className="white_color_text">
                Azachii
              </Link>
            </h2>
          </div>
          <div className="col-xl-7 col-5 u__no_padding align-items-xl-start align-items-center">
            <div className="row u__no_margin justify-content-xl-center justify-content-start align-items-center">
              <Link
                to="/servicios"
                className={itemClass}
                style={{ fontSize: '1.1em' }}
              >
                Servicios
              </Link>
              <Link
                to="/equipo"
                className={itemClass}
                style={{ fontSize: '1.1em' }}
              >
                Equipo
              </Link>
              <Link
                to="/blog"
                className={itemClass}
                style={{ fontSize: '1.1em' }}
              >
                Blog
              </Link>
              <Link
                to="/"
                className={itemClass}
                style={{ fontSize: '1.1em' }}
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
          <div className="col-xl col-7 u__no_padding">
            <div className="row u__no_margin justify-content-end align-items-center">
              <a
                href="https://github.com/Azachii"
                target="_blank"
                rel="noopener noreferrer"
                data-tip="Repositorios de Github"
                className="col-xl-auto col-auto u__no_padding u__pointer"
              >
                <FaGithub className="white_color_text" size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                data-tip="Siguenos en LinkedIn"
                className="col-xl-auto col-auto u__pointer"
              >
                <FaLinkedin className="white_color_text" size={20} />
              </a>
              <a
                href="https://www.facebook.com/az4chii-100360501432809/"
                target="_blank"
                rel="noopener noreferrer"
                data-tip="Síguenos en Facebook"
                className="col-xl-auto col-auto u__pointer u__no_padding"
              >
                <FaFacebookF size={20} className="white_color_text" />
              </a>
              <a
                href="https://www.instagram.com/az4chii/"
                target="_blank"
                rel="noopener noreferrer"
                data-tip="Síguenos en Instagram"
                className="col-xl-auto col-auto u__pointer "
              >
                <FaInstagram className="white_color_text" size={20} />
              </a>
              <a
                href="https://twitter.com/Azachii1"
                target="_blank"
                rel="noopener noreferrer"
                data-tip="Síguenos en Twitter"
                className="col-xl-auto col-auto u__no_padding u__pointer"
              >
                <FaTwitter className="white_color_text" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 u__no_padding">
        <Locations />
      </div>
    </footer>
  );
}

export default Footer;
