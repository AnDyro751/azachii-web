import React from "react"
import styles from "./styles.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaCcVisa, FaCcMastercard, FaMoneyBillAlt } from "react-icons/fa"
const SimplePayments = () => {
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
      className={`${styles.main_container} row u__no_margin justify-content-center accent_light_color`}
    >
      <div className="col-xl-10 u__no_padding">
        <div className="row u__no_margin justify-content-between">
          <div className="col-xl-6">
            <Img
              imgStyle={{
                background: "transparent",
                height: "100%",
                width: "auto",
                userSelect: "none",
              }}
              loading="lazy"
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </div>
          <div className="col-xl-6 u__no_padding align-content-end">
            <div className="row u__no_margin">
              <div className="col-xl-12 u__no_padding">
                <h1 className={`${styles.item_description} black_color_text`}>
                  PROCESAMIENTO DE PAGOS
                </h1>
              </div>
              <div className="col-xl-12 u__no_padding">
                <h3 className={`${styles.item} black_color_text`}>
                  Pagos y suscripciones sin configuración alguna
                </h3>
                <h4 className={`black_color_text ${styles.main_description}`}>
                  Acepta tarjetas de crédito de forma rápida y segura en tu
                  tienda en online.
                </h4>
                <h3 className={`${styles.header} black_color_text`} >Opciones de pago</h3>
                <p className={`${styles.main_description} black_color_text`} >Crea suscripciones para tus membresías o acepta meses sin intereses.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default SimplePayments
