/* eslint-disable camelcase */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function ToolItem({ tool: { image, name, description } }) {
  return (
    <div className="col-md-4 col-sm-6 col-12 u__no_padding" style={{ marginTop: '0.5em' }}>
      <div className={`row u__no_margin justify-content-center ${styles.main_item}`}>
        <div className="col-xl-2 col-2 u__no_padding">
          <LazyLoadImage
            className={`${styles.item_image} u__main_box_shadow`}
            src={image}
          />
        </div>
        <div className="col-xl-9 col-9 offset-1 offset-xl-1 u__no_padding">
          <h1 className={`black_color_text u__normal_font ${styles.title_item}`}>
            {name}
          </h1>
          <div className="separator" />
          <p className="gray_color_text">{description}</p>
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
};

export default ToolItem;
