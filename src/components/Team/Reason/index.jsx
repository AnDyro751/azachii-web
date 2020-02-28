/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ThemeContext from '../../../contexts/Theme';
import Section from './Section';
import styles from './style.module.css';

function Reason({ title, text, items }) {
  const { dark } = useContext(ThemeContext);

  const mainClass = classnames({
    'row justify-content-center': true,
    [styles.why_work_with_us]: true,
    black_color: dark,
  });
  const titleClass = classnames({
    [styles.team_page_section_title]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const messageClass = classnames({
    [styles.team_page_section_message]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });

  return (
    <div className={mainClass}>
      <div className="col-10 u__no_padding">
        <h2 className={titleClass}>
          {title}
        </h2>
        <div className="row u__no_margin justify-content-between">
          <div className="u__no_padding col-12">
            <p className={messageClass}>
              {text}
            </p>
          </div>
          {items && (
            <div className="col-12 u__no_padding" style={{ marginTop: '3em' }}>
              <div className="row u__no_margin">
                {items.map((item, index) => (
                  <Section
                    title={item.title}
                    elements={item.items}
                    key={index}
                    dark={dark}
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
