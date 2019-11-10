import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from './styles.module.css'
const Promo = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "paint-4588860_640.png" }) {
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
      style={{
       
      }}
      className={styles.bg}
      fluid={data.placeholderImage.childImageSharp.fluid}
    >
      <div className="row u__no_margin">
        <div className="col-xl-12 u__no_padding"></div>
      </div>
    </BackgroundImage>
  )
}

export default Promo
