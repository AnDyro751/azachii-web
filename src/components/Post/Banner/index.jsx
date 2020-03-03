/* eslint-disable radix */
import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { months } from '../../../locales/months.json';
import styles from './style.module.css';
import ThemeContext from '../../../contexts/Theme';

function Banner({ title, author, createdAt }) {
  const { dark } = useContext(ThemeContext);
  const [year, month, day] = createdAt.split('-');

  const mainClass = classnames({
    'row u__no_margin align-items-center justify-content-center': true,
    black_color: dark,
    [styles.post_banner]: true,
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
    [styles.post_author_name]: true,
  });
  const createdClass = classnames({
    black_color_text: !dark,
    white_color_text: dark,
    [styles.post_created_at]: true,
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
            <div className={`row ${styles.post_author} align-items-center`}>
              <div className="col-auto u__no_padding">
                <Img
                  alt={author.name}
                  draggable={false}
                  fluid={author.avatar.childImageSharp.fluid}
                  className={styles.post_author_avatar}
                />
              </div>
              <div className="col-auto u__no_padding">
                <h2 className={authorClass}>
                  Por:
                  {' '}
                  <span style={{ fontWeight: 'bold' }}>
                    {author.name}
                  </span>
                </h2>
                <h2 className={createdClass}>
                  El
                  {' '}
                  {Number.parseInt(day)}
                  {' '}
                  de
                  {' '}
                  {months[Number.parseInt(month) - 1]}
                  {' '}
                  del
                  {' '}
                  {year}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          base64: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Banner;
