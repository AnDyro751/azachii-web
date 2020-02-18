/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'gatsby';
import {
  FaInstagram, FaFacebookF, FaGithub, FaTwitter,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Locations from '../Locations';

function Footer({
  custom_class,
  text_color,
  divider,
}) {
  return (
    <footer
      className={`row u__no_margin justify-content-center ${custom_class} ${styles.footer}`}
    >
      <div className="col-xl-10 col-11 u__no_padding">
        <div className={`${styles.divider} ${divider}`} />

        <div className="row u__no_margin align-items-center">
          <div className="col-xl-2 col-12 u__no_padding u__small_margin_vertical">
            <h2 className={`${text_color} ${styles.title}`}>Azachii</h2>
          </div>
          <div className="col-xl-7 col-5 u__no_padding align-items-xl-start align-items-center">
            <div className="row u__no_margin justify-content-xl-center justify-content-start align-items-center">
              <Link
                to="/services"
                className={`col-xl-auto col-12 u__no_padding_in_tablet ${styles.separate_in_tablet} ${text_color} ${styles.item}`}
                style={{ fontSize: '1.1em' }}
              >
                Servicios
              </Link>
              <Link
                to="/team"
                className={`col-xl-auto col-12 u__no_padding_in_tablet ${styles.separate_in_tablet} ${text_color} ${styles.item}`}
                style={{ fontSize: '1.1em' }}
              >
                Equipo
              </Link>
              <Link
                to="/"
                className={`col-xl-auto col-12 u__no_padding_in_tablet ${text_color} ${styles.item}`}
                style={{ fontSize: '1.1em' }}
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
          <div className="col-xl col-7 u__no_padding">
            <div className="row u__no_margin justify-content-end align-items-center">
              <div
                data-tip="Repositorios de Github"
                className="col-xl-auto col-auto u__pointer"
              >
                <FaGithub className={text_color} size={20} />
              </div>
              <div
                data-tip="Síguenos en Facebook"
                className="col-xl-auto col-auto u__pointer u__no_padding"
              >
                <FaFacebookF size={20} className={text_color} />
              </div>
              <div
                data-tip="Síguenos en Instagram"
                className="col-xl-auto col-auto u__pointer "
              >
                <FaInstagram className={text_color} size={20} />
              </div>
              <div
                data-tip="Síguenos en Twitter"
                className="col-xl-auto col-auto u__no_padding u__pointer"
              >
                <FaTwitter className={text_color} size={20} />
              </div>
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

Footer.defaultProps = {
  custom_class: 'white_color',
  text_color: 'black_color_text',
  divider: 'white_color',
};

Footer.propTypes = {
  custom_class: PropTypes.string,
  text_color: PropTypes.string,
  divider: PropTypes.string,
};

export default Footer;
