import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Banner({ cover, name }) {
  return (
    <div
      className="row u__no_margin align-items-center justify-content-center full_height background_image"
      style={{ backgroundImage: `url(${cover.desktop})` }}
    >
      <div className="col-11 u__no_padding">
        <div className="row u__no_margin justify-content-center">
          <div className="col-12 u__no_padding">
            <h1 className={styles.location_name}>
              {name}
            </h1>
          </div>
          <div className="col-12 u__no_padding">
            <div className="row u__no_margin justify-content-center">
              <div
                className="separator separator_big white_color u__no_padding col-4 col-sm-3 col-md-2 col-lg-1"
                style={{ marginTop: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  cover: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,

};

export default Banner;
