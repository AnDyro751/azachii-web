import React from "react"
import styles from "./styles.module.css"
import { FaCcVisa } from "react-icons/fa"
const WebPage = ({}) => (
  <div
    className={`row u__big_margin_vertical black_color ${styles.main_container}`}
  >
    <div className="col-xl-5 offset-1">
      <h2 className="white_color_text">Páginas web</h2>
      <h1 className="white_color_text">
        Todo lo que necesitas para empezar con tu negocio online
      </h1>
      <div className="row u__big_margin_vertical">
        <div className="col-xl-auto u__no_padding">
          <div className={`blue_light_color white_color_text ${styles.button}`}>
            QUIERO UNA WEB GRATIS
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-6">
      <div className="row u__no_mrgin justify-content-start">
        <div className="col-xl-6 u__no_padding">
          <ItemTag text="PAGOS" />
          <ItemTag text="SUSCRIPCIONES" />
          <ItemTag text="Certificado SSL" />
          <ItemTag text="Productos ilimitados" />
          <ItemTag text="Google Maps" />
        </div>
        <div className="col-xl-6">
          <ItemTag text="10GB ancho de banda" />
          <ItemTag text="Google Analytics" />
          <ItemTag text="Facebook Pixel" />
          <ItemTag text="Formulario de contacto" />
        </div>
      </div>
    </div>
  </div>
)

const ItemTag = ({ text }) => (
  <div className={`col-xl-12 u__no_padding ${styles.main_item}`}>
    <p className="main_font white_color_text">{text}</p>
  </div>
)

export default WebPage
