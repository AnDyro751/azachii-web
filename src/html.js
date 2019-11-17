import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <tag />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#f7fcfc" />
        <meta
          name="description"
          content="Desarrollo web & móvil. Todo lo que necesitas para empezar con tu negocio online en la nueva era digital"
        />
        <meta
          name="google-site-verification"
          content="4YllTxUvrtIrzXPabCPTEN5h65zM2xTtGovKtWU17Ws"
        />
        <meta name="robots" content="index, follow" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
 
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
