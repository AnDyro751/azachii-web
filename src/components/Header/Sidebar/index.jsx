import React from 'react';
import PropTypes from 'prop-types';
import {
  FaInstagram, FaFacebookF, FaGithub, FaTwitter,
} from 'react-icons/fa';
import { Link } from 'gatsby';
import styles from './style.module.css';

const HeaderSidebar = ({ isOpen }) => (
  <div className={styles.sidebar} style={{ left: isOpen ? 0 : '-100%' }}>
    <div
      className={styles.sidebar_content}
      style={{
        paddingTop: isOpen
          ? document.getElementsByTagName('header')[0].clientHeight
          : 0,
      }}
    >
      <div className={`row justify-content-center ${styles.menu}`}>
        <div className="col-11 u__no_padding">
          <Link to="/servicios" className={`black_color_text ${styles.sidebar_item}`}>
            <h5>
              SERVICIOS
            </h5>
          </Link>
          <Link to="/equipo" className={`black_color_text ${styles.sidebar_item}`}>
            <h5>
              EQUIPO
            </h5>
          </Link>
        </div>
      </div>
      <div className={styles.social_area}>
        <div className="row u__no_margin justify-content-center">
          <a
            href="https://github.com/Azachii"
            target="_blank"
            rel="noopener noreferrer"
            data-tip="Repositorios de Github"
            className={`col-auto u__pointer u__no_padding ${styles.social_icon}`}
          >
            <FaGithub size={30} className="main_color_text" />
          </a>
          <a
            href="https://www.facebook.com/az4chii-100360501432809/"
            target="_blank"
            rel="noopener noreferrer"
            data-tip="Síguenos en Facebook"
            className={`col-auto u__no_padding u__pointer ${styles.social_icon}`}
          >
            <FaFacebookF size={30} className="main_color_text" />
          </a>
          <a
            href="https://www.instagram.com/az4chii/"
            target="_blank"
            rel="noopener noreferrer"
            data-tip="Síguenos en Instagram"
            className={`col-auto u__pointer u__no_padding ${styles.social_icon}`}
          >
            <FaInstagram size={30} className="main_color_text" />
          </a>
          <a
            href="https://twitter.com/Azachii1"
            target="_blank"
            rel="noopener noreferrer"
            data-tip="Síguenos en Twitter"
            className="col-auto u__pointer u__no_padding"
          >
            <FaTwitter className="main_color_text" size={30} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

HeaderSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default HeaderSidebar;
