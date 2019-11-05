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

let last = 0
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
  const [reverse, setReverse] = useState(false)
  const [paused, setPaused] = useState(true)
  const [scroll, setScroll] = useState(0)
  const [direction, setDirection] = useState("")

  useEffect(() => {
    window.addEventListener("scroll", e => {
      var st = window.pageYOffset || document.documentElement.scrollTop
      if (st > last) {
        setDirection("down")
      } else {
        setDirection("up")
      }
      last = st <= 0 ? 0 : st
      setScroll(last)
    })
  }, [])

  const imageContainerClass = classnames({
    // [styles.blured]: toAnimated,
    "col-xl-6 u__no_padding": true,
    [styles.main_image_container]: true,
  })
  return (
    <div className={`${styles.main_banner} row u__no_margin`}>
      <div className="col-xl-12 u__no_padding">
        <div className="row u__no_margin align-items-center justify-content-between">
          <div className="col-xl-5 offset-1 u__no_padding">
            <div className="row u__no_margin">
              <CodeIcons />
              <div className="col-xl-12 u__no_padding u__small_margin_horizontal">
                <h1 className={`${styles.description_text}`}>
                  Desarrollo web & móvil
                </h1>
              </div>
              <div className="col-xl-12 u__no_padding u__small_margin_horizontal">
                <button
                  className={`blue_light_color white_color_text ${styles.button_services}`}
                >
                  SERVICIOS
                </button>
              </div>
            </div>
          </div>
          <Fade right>
            <div className={imageContainerClass}>
              {/* <TweenOne
              resetStyle={true}
              animation={[
                { marginLeft: `${scroll}px`, duration: 0 },
                // { y: scroll, duration: 0 },
              ]}
              paused={scroll === 0 || scroll > window.innerHeight}
              // reverse={direction === "up"}
            > */}
              <BackgroundImage
                Tag="section"
                style={{
                  minHeight: "110vh",
                }}
                fluid={data.placeholderImage.childImageSharp.fluid}
                backgroundColor={`#040e18`}
              ></BackgroundImage>

              {/* </TweenOne> */}
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
      <div className={`col-xl-auto ${styles.main_image}`}>
        <img src={reactSVG} />
      </div>
      <div className={`col-xl-auto ${styles.main_image}`}>
        <img src={firebaseSVG} />
      </div>
      <div className={`col-xl-auto ${styles.main_image}`}>
        <img src={cloud} />
      </div>
      <div className={`col-xl-auto ${styles.main_image}`}>
        <img src={rails} />
      </div>
      <div className={`col-xl-auto ${styles.main_image}`}>
        <img src={android} />
      </div>
      <div className={`col-xl-auto ${styles.main_image}`}>
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
