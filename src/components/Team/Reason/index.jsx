/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import styles from './style.module.css';

function Reason({
  title, text, items, leftCols, rightCols,
}) {
  return (
    <div className={`row ${styles.why_work_with_us} justify-content-center`}>
      <div className="col-10 u__no_padding">
        <h2 className={styles.team_page_section_title}>
          {title}
        </h2>
        {items ? (
          <div className="row u__no_margin justify-content-between">
            <div className={`u__no_padding ${leftCols}`}>
              <p className={`${styles.team_page_section_message} ${styles.separate_from_bottom_mobile}`}>
                {text}
              </p>
            </div>
            <div className={`${rightCols} u__no_padding`}>
              <div className="row u__no_margin">
                {items.map((item, index) => (
                  <Section
                    cols={12 / items.length}
                    title={item.title}
                    elements={item.items}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className={styles.team_page_section_message}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

Reason.defaultProps = {
  items: undefined,
  leftCols: '',
  rightCols: '',
};

Reason.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  items: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }),
  leftCols: PropTypes.string,
  rightCols: PropTypes.string,
};

export default Reason;
