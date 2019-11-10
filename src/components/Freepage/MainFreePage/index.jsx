import React from "react"
import styles from "./styles.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import imge from "./../../../images/bitmap.png"
const MainFreePage = () => {
  // console.log(imge)
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "free_page_.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      className={`row u__no_margin justify-content-center align-items-center align-content-center ${styles.main}`}
    >
      <div className="col-xl-5 u__no_padding offset-xl-1 col-11">
        <h1 className={`${styles.title} black_color_text`}>
          SOLICITA TU WEB <span className="black_color_text">GRATIS</span>
        </h1>
        <div className="row u__no_margin">
          <div className="col-xl-auto u__no_padding">
            <a href="https://forms.gle/jGBNpCnUEoURBPTC7" target="_blanl">
              <div
                className={`${styles.button} blue_light_color white_color_text u__main_box_shadow`}
              >
                Rellena el formulario de registro
              </div>
            </a>
            <small className="black_color_text">Google Docs</small>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-11 u__small_margin_vertical">
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          // className="u__main_box_shadow"
        />
      </div>
    </div>
  )
}

// background-position: right bottom;
//     background-size: 50% !important;
//     background-attachment: fixed;
//     background-repeat: no-repeat;
export default MainFreePage
