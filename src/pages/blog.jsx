import React, { useEffect, useContext } from 'react';
import { useMixpanel } from 'gatsby-plugin-mixpanel';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ThemeContext from '../contexts/Theme';
import NoPosts from '../components/NoPosts';
import styles from '../css/blog.module.css';
import Post from '../components/Post';
import SEO from '../components/seo';
import Layout from '../layouts/Main';

export const query = graphql`
  query getPosts {
    allMarkdownRemark(sort: {
      order: DESC, fields: [frontmatter___date]
    }) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

function Blog({ data }) {
  const { dark } = useContext(ThemeContext);
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track('blog_page');
  }, [mixpanel]);

  const mainClass = classnames({
    'row u__no_margin justify-content-center': true,
    [styles.blog]: true,
    black_color: dark,
  });

  return (
    <Layout>
      <>
        <SEO title="Blog" />
        <div className={mainClass}>
          <div className="col-11 col-xl-10 u__no_padding">
            <div className="row u__no_margin">
              {data.allMarkdownRemark.edges.length > 0 ? (
                data.allMarkdownRemark.edges.map((post) => (
                  <Post data={post.node.frontmatter} key={post.node.path} dark={dark} />
                ))
              ) : (
                <NoPosts />
              )}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
            }).isRequired,
          }),
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Blog;
