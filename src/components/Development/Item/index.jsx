import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Item({ data }) {
  return (
    <div className="col-4 col-sm-3 col-md-2 col-lg-1 u__no_padding">
      <div className={`row u__no_margin justify-content-center ${styles.main_item}`}>
        <div
          className="col-12 u__no_padding"
          data-tip={data.name}
          data-scroll-hide
          data-iscapture={false}
        >
          <LazyLoadImage
            className={`${styles.item_image} u__main_box_shadow`}
            src={data.image}
          />
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
