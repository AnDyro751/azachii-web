/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description, lang, meta, title,
}) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fluid {
              src
            }
          } 
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const data = {
    '@context': 'http://schema.org/',
    '@type': 'Organization',
    name: 'Azachii Development',
    description: 'Todo lo que necesitas para empezar con tu negocio online',
    url: 'https://azachii-develop.web.app',
    sameAs: [
      'https://www.facebook.com/az4achii/',
      'https://www.instagram.com/az4achii/',
    ],
    foundingDate: '2019-11-01',
    founders: [
      {
        '@type': 'Person',
        name: 'Angel Mendez',
      },
      {
        '@type': 'Person',
        name: 'Jorge Castillo',
      },
    ],
  };

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: metaDescription,
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: metaDescription,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:creator',
            content: site.siteMetadata.author,
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:description',
            content: metaDescription,
          },
        ].concat(meta)}
      >
        <script type="application/ld+json">{JSON.stringify(data)}</script>
      </Helmet>
    </>
  );
}

SEO.defaultProps = {
  lang: 'es',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
