/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.css';

function Item({
  children, text, handleEnter, dark,
}) {
  const textClass = classnames({
    [styles.main_item_title]: true,
    main_color_text: !dark,
    main_color_dark_text: dark,
  });
  const iconContainerClass = classnames({
    [styles.main_icon]: true,
    blue_light_color_rgba: !dark,
    red_color: dark,
  });

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
              <div className={iconContainerClass}>
                {children}
              </div>
            </div>
            <div className="col-xl-auto col-auto" style={{ paddingRight: 0 }}>
              <h2 className={textClass}>
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
  dark: PropTypes.bool.isRequired,
};

export default Item;
