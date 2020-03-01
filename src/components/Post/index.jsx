import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Post({ data, dark, cover }) {
  const titleClass = classnames({
    black_color_text: !dark,
    white_color_text: dark,
    [styles.post_title]: true,
  });
  const contentClass = classnames({
    'row u__no_margin': true,
    [styles.post_content]: true,
    [styles.post_content_black]: dark,
  });
  const authorClass = classnames({
    secondary_black_color_text: !dark,
    secondary_white_color_text: dark,
    [styles.post_author]: true,
  });
  const tagsClass = classnames({
    secondary_black_color_text: !dark,
    secondary_white_color_text: dark,
    [styles.post_tags]: true,
  });

  return (
    <div className={`col-12 col-sm-6 col-md-4 ${styles.post}`}>
      <Link className={contentClass} to={data.path}>
        <div className="col-12 u__no_padding">
          <Img
            alt={data.title}
            draggable={false}
            fluid={cover.childImageSharp.fluid}
            className={styles.post_cover}
          />
        </div>
        <div className={`col-12 ${styles.post_info}`}>
          <p className={tagsClass}>
            {data.tags.join(' - ')}
          </p>
          <h2 className={titleClass}>
            {data.title}
          </h2>
          <p className={authorClass}>
            Por:
            {' '}
            <span style={{ fontWeight: 'bold' }}>
              {data.author}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
  dark: PropTypes.bool.isRequired,
  cover: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({
        base64: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Post;
