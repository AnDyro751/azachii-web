/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import { Helmet } from "react-helmet"

const Layout = ({ children, title = "Desarrollo web y móvil" }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // console.log(data.site.siteMetadata.title, "DATA")
  return (
    <>
      <Helmet
        title={`${data.site.siteMetadata.title} | ${title}`}
        defer={false}
      />
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        {/* <footer>© {new Date().getFullYear()}, Built with</footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
