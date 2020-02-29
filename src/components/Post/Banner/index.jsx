import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import ThemeContext from '../../../contexts/Theme';

function Banner({ title, author }) {
  const { dark } = useContext(ThemeContext);

  const mainClass = classnames({
    'row u__no_margin align-items-center justify-content-center full_height': true,
    black_color: dark,
  });
  const titleClass = classnames({
    black_color_text: !dark,
    white_color_text: dark,
    [styles.post_title]: true,
  });
  const separatorClass = classnames({
    'separator col-1 u__no_padding': true,
    black_color: !dark,
    white_color: dark,
  });
  const authorClass = classnames({
    black_color_text: !dark,
    white_color_text: dark,
    [styles.post_author]: true,
  });

  return (
    <div className={mainClass}>
      <div className="col-11 col-xl-10 u__no_padding">
        <div className="row u__no_margin">
          <div className="col-12 col-sm-6 u__no_padding">
            <h1 className={titleClass}>
              {title}
            </h1>
            <div className="row u__no_margin">
              <div className={separatorClass} />
            </div>
            <h2 className={authorClass}>
              Por:
              {' '}
              <span style={{ fontWeight: 'bold' }}>
                {author}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Banner;
