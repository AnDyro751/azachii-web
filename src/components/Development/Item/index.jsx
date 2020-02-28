import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.css';

function Item({ data, dark }) {
  const imageContainerClass = classnames({
    [styles.item_image]: true,
    u__main_box_shadow: true,
    secondary_black_color: dark,
    secondary_white_color: !dark,
  });

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
            className={imageContainerClass}
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
  dark: PropTypes.bool.isRequired,
};

export default Item;
