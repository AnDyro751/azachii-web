import React, { useEffect, useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import styles from "./style.module.css"
import classnames from "classnames"
import firebaseSVG from "../../../images/firebase-1.svg"
import cloud from "../../../images/google-cloud.svg"
import reactSVG from "../../../images/react.svg"
import rails from "../../../images/rails-1.svg"
import android from "../../../images/android.svg"
import ios from "../../../images/apple.svg"
import Fade from "react-reveal/Fade"

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

  const imageContainerClass = classnames({
    "col-xl-6 u__no_padding": true,
    [styles.main_image_container]: true,
  })
  return (
    <div className={`${styles.main_banner} row u__no_margin`}>
      <div className="col-xl-12 u__no_padding">
        <div className="row u__no_margin align-items-center justify-content-center">
          <Fade right>
            <div className="col-xl-5 offset-xl-1 u__no_padding">
              <div className="row u__no_margin">
                <CodeIcons />
                <div className="col-xl-12 u__no_padding u__small_margin_vertical">
                  <h1
                    className={`${styles.description_text} black_color_text main_font`}
                  >
                    Desarrollo web & móvil
                  </h1>
                </div>
                <div className="col-xl-12 u__no_padding u__small_margin_vertical">
                  <button
                    className={`black_color white_color_text u__main_box_shadow ${styles.button_services}`}
                  >
                    SERVICIOS
                  </button>
                </div>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className={imageContainerClass}>
              <BackgroundImage
                Tag="section"
                style={{
                  minHeight: "110vh",
                }}
                fluid={data.placeholderImage.childImageSharp.fluid}
                backgroundColor={`#040e18`}
              ></BackgroundImage>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

const CodeIcons = () => (
  <div className="col-xl-12 u__no_padding">
    <div className="row u__no_margin align-items-center">
      <div
        data-tip="React js"
        data-scroll-hide={true}
        data-iscapture={false}
        className={`col-xl-auto ${styles.main_image}`}
      >
        <img src={reactSVG} />
      </div>
      <div data-tip="Firebase" className={`col-xl-auto ${styles.main_image}`}>
        <img src={firebaseSVG} />
      </div>
      <div
        data-tip="Google Cloud"
        className={`col-xl-auto ${styles.main_image}`}
      >
        <img src={cloud} />
      </div>
      <div
        data-tip="Ruby on Rails"
        className={`col-xl-auto ${styles.main_image}`}
      >
        <img src={rails} />
      </div>
      <div
        data-tip="React Native Android Apps"
        className={`col-xl-auto ${styles.main_image}`}
      >
        <img src={android} />
      </div>
      <div
        data-tip="React Native IOS Apps"
        className={`col-xl-auto ${styles.main_image}`}
      >
        <img
          src={ios}
          style={{
            height: "30px",
          }}
        />
      </div>
    </div>
  </div>
)

const StyledBackgroundSection = styled(MainBanner)`
  width: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection
