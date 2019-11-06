import React from "react"
import styles from "./styles.module.css"
import { FaCode } from "react-icons/fa"
import { GoDeviceCameraVideo } from "react-icons/go"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const HelpYou = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "phone.png" }) {
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
      className={`row u__no_margin ${styles.main_component} blue_light_color align-items-center`}
    >
      <div className="col-xl-12 u__no_padding">
        <div className="row u__no_margin">
          <div className="col-xl-5 offset-1 u__no_padding white_color">
            <div className="row u__no_margin u__small_padding">
              <div className="col-xl-12 u__no_padding u__small_margin_horizontal">
                <h1 className={`main_color_text ${styles.help_text}`}>
                  Estamos aquí para ayudarte con
                </h1>
              </div>
              <div className="col-xl-12 u__no_padding">
                <div className="row u__no_margin justify-content-between">
                  <div className="col-xl-auto u__no_padding">
                    <div
                      data-tip="Desarrollo"
                      className={`red_light_color_rgba red_light_color_color ${styles.main_icon}`}
                    >
                      <FaCode />
                    </div>
                  </div>
                  <div className="col-xl-auto">
                    <div
                      data-tip="Producción multimedia"
                      className={`red_light_color_rgba  red_light_color_color ${styles.main_icon}`}
                    >
                      <GoDeviceCameraVideo />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-xl-6 u__no_padding`}>
            <div className={styles.main_phone_container}>
              <Img
                // className={styles.phone}
                fluid={data.placeholderImage.childImageSharp.fluid}
              />
              {/* <img
                className={styles.phone}
                src="http://localhost:8000/static/2d046f66a1a68bbc36cfbd45d3cde29f/be9cc/phone.png"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpYou
