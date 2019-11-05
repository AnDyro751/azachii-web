import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import styles from "./style.module.css"
const MainBanner = () => {
  const data = useStaticQuery(graphql`
    query Banner {
      placeholderImage: file(relativePath: { eq: "texture-1909992_1280.jpg" }) {
        childImageSharp {
          fluid(base64Width: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="row u__no_margin">
      <div className="col-xl-12 u__no_padding">
        <div className="row u__no_margin align-items-center justify-content-between">
          <div className="col-xl-5 offset-1">
            <div className="row u__no_margin">
              <div className="col-xl-12 u__no_padding">
                <h1 className={`${styles.description_text}`}>
                  Desarrollo web & móvil
                </h1>
              </div>
              <div className="col-xl-12 u__no_padding">
                <button className={`blue_light_color white_color_text ${styles.button_services}`}>
                  SERVICIOS
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-6 u__no_padding">
            <BackgroundImage
              Tag="section"
              style={{
                height: "100vh",
              }}
              fluid={data.placeholderImage.childImageSharp.fluid}
              backgroundColor={`#040e18`}
            ></BackgroundImage>
          </div>
        </div>
      </div>
    </div>
  )
}

const StyledBackgroundSection = styled(MainBanner)`
  width: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection
