import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Project({
  name, brief, description, image, web, color, inverted,
}) {
  return (
    <div className={`row justify-content-center align-items-center ${styles.project_section}`}>
      <div className="col-11 col-lg-10 u__no_padding">
        <div className="row u__no_margin">
          <div
            className={`col-12 col-sm-5 ${inverted ? 'order-sm-2' : ''} order-last order-sm-first u__no_padding ${styles.project_image_container}`}
            style={{ justifyContent: image.justify, alignItems: image.align }}
          >
            <img
              src={image.src}
              className={`${styles.project_image} ${image.className}`}
              alt={image.alt}
            />
          </div>
          <div className="col-12 col-sm-7 u__no_padding align-items-center" style={{ display: 'flex' }}>
            <div>
              <h3 className={styles.project_title} style={{ color }}>
                {web ? (
                  <a
                    href={web}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color }}
                  >
                    {name}
                  </a>
                ) : name}
              </h3>
              <p className={styles.project_phrase} style={{ color }}>
                {brief}
              </p>
              <div
                className="separator"
                style={{ backgroundColor: color, margin: '1em 0' }}
              />
              <p className={styles.project_description} style={{ color }}>
                {description}
              </p>
              {/* <a
                className={`u__main_box_shadow ${styles.project_button}`}
                style={{ backgroundColor: 'rgb(94, 46, 171)' }}
                href="https://play.google.com/store/apps/details?id=com.perrosfelices"
                target="_blank"
              >
                <FaGooglePlay size={20} color="currentColor" style={{ marginRight: '0.5em' }} /> DISPONIBLE EN GOOGLE PLAY
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Project.defaultProps = {
  inverted: false,
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    justify: PropTypes.string.isRequired,
    align: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }).isRequired,
  web: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
};

export default Project;
