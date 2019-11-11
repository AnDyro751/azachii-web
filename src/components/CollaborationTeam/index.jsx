import React from "react"
import styles from "./styles.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const CollaborationTeam = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "services/startup-593296_1280.jpg" }
      ) {
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
      className="row u__no_margin align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="col-11 col-lg-12 u__no_padding">
        <div className="row u__no_margin">
          <div className="col-xl-6 offset-1 u__no_padding">
            <h1
              className={`${styles.service_page_title} black_color_text main_font`}
            >
              Un proceso basado en{" "}
              <span className={styles.collaboration}>colaboración</span>
            </h1>
            <div className="separator" />
            <p className={`${styles.service_page_message} black_color_text`}>
              Nuestros servicios de diseño, producción multimedia e ingeniería
              son transparentes y flexibles.
            </p>
          </div>
          <div className="col-xl-5 u__no_padding">
            <Img 
            className={styles.image}
            fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollaborationTeam
