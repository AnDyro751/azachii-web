/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import styles from './style.module.css';

function Reason({ title, text, items }) {
  return (
    <div className={`row ${styles.why_work_with_us} justify-content-center`}>
      <div className="col-10 u__no_padding">
        <h2 className={styles.team_page_section_title}>
          {title}
        </h2>
        <div className="row u__no_margin justify-content-between">
          <div className="u__no_padding col-12">
            <p className={styles.team_page_section_message}>
              {text}
            </p>
          </div>
          {items && (
            <div className="col-12 u__no_padding" style={{ marginTop: '3em' }}>
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
          )}
        </div>
      </div>
    </div>
  );
}

Reason.defaultProps = {
  items: undefined,
};

Reason.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  items: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }),
};

export default Reason;
