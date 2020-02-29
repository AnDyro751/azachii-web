import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Post({ data, dark }) {
  const titleClass = classnames({
    black_color_text: !dark,
    white_color_text: dark,
  });
  const contentClass = classnames({
    'row u__no_margin': true,
    [styles.post_content]: true,
    [styles.post_content_black]: dark,
  });

  return (
    <div className={`col-12 col-sm-6 col-md-4 ${styles.post}`}>
      <Link className={contentClass} to={data.path}>
        <div className="col-12 u__no_padding">
          <h2 className={titleClass}>
            {data.title}
          </h2>
        </div>
      </Link>
    </div>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  dark: PropTypes.bool.isRequired,
};

export default Post;
