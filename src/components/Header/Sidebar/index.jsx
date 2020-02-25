import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
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
      <div
        style={{ height: '88%' }}
        className="row u__no_margin justify-content-center align-items-center"
      >
        <div className="col-auto u__no_padding">
          <Link to="/services">
            <h5 className="black_color_text sidebar_item">SERVICIOS</h5>
          </Link>
        </div>
      </div>
    </div>
    <style>
      {`
      .sidebar_item {
        font-size: 1.8em;
        margin: 0 0 1.5em 0 !important;
        text-align: center;
      }
    `}
    </style>
  </div>
);

HeaderSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default HeaderSidebar;
