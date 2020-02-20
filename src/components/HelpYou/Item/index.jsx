/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Item({
  children, text, handleEnter,
}) {
  return (
    <Fade left>
      <div
        onClick={handleEnter}
        onMouseEnter={handleEnter}
        className={`${styles.main_item} row`}
      >
        <div className="col-xl-12 col-12 u__no_padding">
          <div className="row u__no_margin align-items-center">
            <div className="col-xl-auto col-auto u__no_padding">
              <div className={`${styles.main_icon} blue_light_color_rgba`}>
                {children}
              </div>
            </div>
            <div className="col-xl-auto col-auto" style={{ paddingRight: 0 }}>
              <h2 className={`main_color_text ${styles.main_item_title}`}>
                {text}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  handleEnter: PropTypes.func.isRequired,
};

export default Item;
