import React from 'react';
import PropTypes from 'prop-types';
import {
  FaInstagram, FaFacebookF, FaGithub, FaTwitter,
} from 'react-icons/fa';
import { Link } from 'gatsby';
import classnames from 'classnames';
import styles from './style.module.css';

function HeaderSidebar({ isOpen, dark }) {
  const sidebarClass = classnames({
    [styles.sidebar]: true,
    white_color: !dark,
    black_color: dark,
  });
  const sidebarContentClass = classnames({
    white_color: !dark,
    black_color: dark,
  });
  const sidebarItem = classnames({
    [styles.sidebar_item]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const iconClass = classnames({
    main_color_text: !dark,
    main_color_dark_text: dark,
  });

  return (
    <div className={sidebarClass} style={{ left: isOpen ? 0 : '-100%' }}>
      <div
        className={sidebarContentClass}
        style={{
          paddingTop: isOpen
            ? document.getElementsByTagName('header')[0].clientHeight
            : 0,
        }}
      >
        <div className={`row justify-content-center ${styles.menu}`}>
          <div className="col-11 u__no_padding">
            <Link to="/servicios" className={sidebarItem}>
              <h5>
                SERVICIOS
              </h5>
            </Link>
            <Link to="/equipo" className={sidebarItem}>
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
              <FaGithub size={30} className={iconClass} />
            </a>
            <a
              href="https://www.facebook.com/az4chii-100360501432809/"
              target="_blank"
              rel="noopener noreferrer"
              data-tip="Síguenos en Facebook"
              className={`col-auto u__no_padding u__pointer ${styles.social_icon}`}
            >
              <FaFacebookF size={30} className={iconClass} />
            </a>
            <a
              href="https://www.instagram.com/az4chii/"
              target="_blank"
              rel="noopener noreferrer"
              data-tip="Síguenos en Instagram"
              className={`col-auto u__pointer u__no_padding ${styles.social_icon}`}
            >
              <FaInstagram size={30} className={iconClass} />
            </a>
            <a
              href="https://twitter.com/Azachii1"
              target="_blank"
              rel="noopener noreferrer"
              data-tip="Síguenos en Twitter"
              className="col-auto u__pointer u__no_padding"
            >
              <FaTwitter className={iconClass} size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

HeaderSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
};

export default HeaderSidebar;
