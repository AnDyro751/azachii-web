/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Section({ title, elements, cols }) {
  return (
    <div className={`col-6 col-sm-${cols} ${styles.team_page_section_item}`}>
      <div className="row u__no_margin justify-content-center">
        <p className={styles.team_page_section_item_title}>
          {title}
        </p>
        <div className="col-12 u__no_padding">
          {elements.map((item, index) => (
            <p className={styles.team_page_section_item_label} key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  cols: PropTypes.number.isRequired,
};

export default Section;
