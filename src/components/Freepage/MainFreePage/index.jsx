import React from "react"
import styles from "./styles.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import imge from "./../../../images/bitmap.png"
const MainFreePage = () => {
  console.log(imge)
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bitmap.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
    className="accent_color"
      style={{
        backgroundPosition: "right bottom",
        backgroundSize: "50%",
        backgroundRepeat: "no-repeat",
        // backgroundColor: "#d5eeed",
      }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    >
      <div
        className={`row u__no_margin justify-content-center align-items-center align-content-center ${styles.main}`}
      >
        <div className="col-xl-12 u__no_padding">
          <h1 className={`${styles.title} accent_color_text_dark`}>
            SOLICITA TU WEB{" "}
            <span className="accent_color_text_light">GRATIS</span>
          </h1>
        </div>
      </div>
    </BackgroundImage>
  )
}

// background-position: right bottom;
//     background-size: 50% !important;
//     background-attachment: fixed;
//     background-repeat: no-repeat;
export default MainFreePage
