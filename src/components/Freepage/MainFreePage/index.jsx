import React from "react"
import styles from "./styles.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import imge from "./../../../images/bitmap.png"
const MainFreePage = () => {
  console.log(imge)
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "checkout_a.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      className={`row u__no_margin accent_color justify-content-center align-items-center align-content-center ${styles.main}`}
    >
      <div className="col-xl-12 u__no_padding">
        <h1 className={`${styles.title} accent_color_text_dark`}>
          SOLICITA TU WEB{" "}
          <span className="accent_color_text_light">GRATIS</span>
        </h1>
      </div>
    </div>
  )
}

export default MainFreePage
