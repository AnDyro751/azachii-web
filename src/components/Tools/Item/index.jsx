/* eslint-disable camelcase */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.css';

function ToolItem({ tool: { image, name, description }, dark }) {
  const nameClass = classnames({
    u__normal_font: true,
    [styles.title_item]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const imageClass = classnames({
    [styles.item_image]: true,
    u__main_box_shadow: true,
    secondary_white_color: !dark,
    secondary_black_color: dark,
  });
  const separatorClass = classnames({
    separator: true,
    black_color: !dark,
    white_color: dark,
  });
  const descriptionClass = classnames({
    secondary_black_color_text: !dark,
    secondary_white_color_text: dark,
  });

  return (
    <div className="col-md-4 col-sm-6 col-12 u__no_padding" style={{ marginTop: '0.5em' }}>
      <div className={`row u__no_margin justify-content-center ${styles.main_item}`}>
        <div className="col-xl-2 col-2 u__no_padding">
          <LazyLoadImage className={imageClass} src={image} />
        </div>
        <div className="col-xl-9 col-9 offset-1 offset-xl-1 u__no_padding">
          <h1 className={nameClass}>
            {name}
          </h1>
          <div className={separatorClass} />
          <p className={descriptionClass}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

ToolItem.propTypes = {
  tool: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  dark: PropTypes.bool.isRequired,
};

export default ToolItem;
