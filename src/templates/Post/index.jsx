import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ThemeContext from '../../contexts/Theme';
import Share from '../../components/Share';
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


  console.log(data.coverPost);

  return (
    <Layout>
      <>
        <SEO
          title={data.markdownRemark.frontmatter.title}
          description={data.markdownRemark.frontmatter.excerpt}
          meta={[
            {
              name: 'og:image',
              content: data.coverPost.childImageSharp.fluid.src,
            },
          ]}
        />
        <Banner
          title={data.markdownRemark.frontmatter.title}
          author={{
            name: data.markdownRemark.frontmatter.author,
            avatar: data.avatarImage,
          }}
          createdAt={data.markdownRemark.frontmatter.date}
        />
        <div className={mainClass}>
          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            className={contentClass}
          />
          <div className={`col-11 col-xl-10 u__no_padding ${styles.share_section}`}>
            <Share
              url={data.markdownRemark.frontmatter.path}
              title={data.markdownRemark.frontmatter.title}
              message={`Checa este articulo de ${data.markdownRemark.frontmatter.title} que encontre en Azachii, te será de mucha ayuda`}
            />
          </div>
        </div>
      </>
    </Layout>
  );
}

export const query = graphql`
  query($pathSlug: String!, $avatar: String!, $cover: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        author
        avatar
        tags
        date
        path
        excerpt
      }
    }
    coverPost: file(relativePath: { eq: $cover }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          src
        }
      }
    }
    avatarImage: file(relativePath: { eq: $avatar }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid
        }
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
        avatar: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    avatarImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          base64: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    coverPost: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Post;
