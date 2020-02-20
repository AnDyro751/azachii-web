import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Banner({
  cover, name, message, buttonText,
}) {
  function goToContact() {
    const YPosition = document.getElementsByClassName('contact_form')[0].getBoundingClientRect().top;
    const adjust = document.body.clientWidth < 768 ? 7 : 8;
    window.scrollTo(0, (YPosition / 10) * adjust);
  }

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
          <div className="col-12 u__no_padding">
            <p className={styles.location_message}>
              {message}
            </p>
          </div>
          <button
            className={`col-12 col-sm-6 col-md-5 col-lg-3 u__main_box_shadow ${styles.impulse_me}`}
            type="button"
            onClick={goToContact}
          >
            {buttonText}
          </button>
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
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Banner;
