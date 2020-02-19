import React from 'react';
import PropTypes from 'prop-types';

function Banner({ cover }) {
  return (
    <div
      className="row u__no_margin align-items-center justify-content-center full_height background_image"
      style={{ backgroundImage: `url(${cover.desktop})` }}
    >

    </div>
  );
}

Banner.propTypes = {
  cover: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string,
  }).isRequired,
};

export default Banner;
