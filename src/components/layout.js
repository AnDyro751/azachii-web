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
import MessengerCustomerChat from "react-messenger-customer-chat-beta"
// import firebase from "firebase/app"

import Header from "./Header/index"


const Layout = ({
  children,
  title = "Desarrollo web y móvil",
  light = false,
}) => {
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
      <Header light={light} />

      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
          overflow: "hidden",
        }}
      >
        <main>{children}</main>
        {/* <footer>© {new Date().getFullYear()}, Built with</footer> */}
      </div>
      <MessengerCustomerChat
        pageId="329666941258229"
        version="5.0"
        appId="641527279645625"
        minimized={true}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
