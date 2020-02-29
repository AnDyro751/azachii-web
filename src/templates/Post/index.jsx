import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ThemeContext from '../../contexts/Theme';
import styles from '../../css/post.module.css';
import Banner from '../../components/Post/Banner';
import SEO from '../../components/seo';

import Layout from '../../layouts/Main';

function Post({ data }) {
  const { dark } = useContext(ThemeContext);

  const mainClass = classnames({
    'row u__no_margin justify-content-center': true,
    black_color: dark,
  });
  const contentClass = classnames({
    [styles.post_content_dark]: dark,
    'col-11 col-xl-10 u__no_padding': true,
    [styles.post_content]: true,
  });

  return (
    <Layout>
      <>
        <SEO title={data.markdownRemark.frontmatter.title} />
        <Banner
          title={data.markdownRemark.frontmatter.title}
          author={data.markdownRemark.frontmatter.author}
        />
        <div className={mainClass}>
          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            className={contentClass}
          />
        </div>
      </>
    </Layout>
  );
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        author
      }
    }
  }
`;

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Post;
