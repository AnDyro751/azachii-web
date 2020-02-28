/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.css';

function Section({ title, elements, dark }) {
  const titleClass = classnames({
    [styles.team_page_section_item_title]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const itemClass = classnames({
    [styles.team_page_section_item_label]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });

  return (
    <div className={`col-6 col-sm-3 ${styles.team_page_section_item}`}>
      <div className="row u__no_margin justify-content-center">
        <p className={titleClass}>
          {title}
        </p>
        <div className="col-12 u__no_padding">
          {elements.map((item, index) => (
            <p className={itemClass} key={index}>
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
  dark: PropTypes.bool.isRequired,
};

export default Section;
