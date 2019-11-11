import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./styles.module.css"
const Value = ({ title = "", left = true, text = "", image = "value" }) => {
  const data = useStaticQuery(graphql`
    {
      value: file(relativePath: { eq: "workplace-1245776_1280.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      design: file(relativePath: { eq: "people-2557399_1280.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      work: file(relativePath: { eq: "document-3268750_1280.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  //   console.log("DATA", data[image])
  return (
    <div className={`row u__no_margin justify-content-center service_step`}>
      <div className={`col-11 col-lg-10 u__no_padding`}>
        <div className="row u__no_margin align-items-center justify-content-between">
          <div
            className={`col-md-6  col-12 ${
              left ? "col-xl-6" : "order-xl-last offset-xl-1 col-xl-5"
            } u__no_padding`}
          >
            <div className="row u__no_margin">
              <div className="col-md-12 col-xl-12 u__no_padding">
                <h2 className="service_step_title black_color_text">
                  {/* Siempre aportamos valor */}
                  {title}
                </h2>
                <p className="service_step_description black_color_text">
                  {text}
                  {/* Comenzamos haciendo preguntas estrategicas y haciendo una lluvia
                de ideas contigo. Despues armamos un plan para llevar a cabo tu
                proyecto, ahorrando tiempo y dinero. */}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`col-md-6 u__no_padding col-12 u__small_margin_vertical ${left ? "offset-xl-1 col-xl-5" : "col-xl-6"}`}
          >
            <Img
              className={`${styles.image} ${styles[left ? "left" : "right"]}`}
              loading="lazy"
              fluid={data[image].childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Value
