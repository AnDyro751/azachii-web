import React from "react"
import styles from "./styles.module.css"
import { FaCode, FaShoppingCart } from "react-icons/fa"
import { GoDeviceCameraVideo } from "react-icons/go"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { LazyLoadImage } from "react-lazy-load-image-component"
import cart from "../../images/shopping-cart.png"
const HelpYou = () => {
  return (
    <div className="row u__big_margin_vertical justify-content-center">
      <div className="col-xl-10 u__no_padding">
        <div className="row u__small_margin_vertical">
          <div className="col-xl-6 u__no_padding u__small_margin_vertical">
            <h1 className={`main_color_text main_font ${styles.main_title}`}>
              Estamos aquí para <br />
              ayudarte con
            </h1>
          </div>
        </div>
        <ItemHelpYou text="Tu tienda en linea">
          <FaShoppingCart className="main_color_text" size={20} />
        </ItemHelpYou>
      </div>
    </div>
  )
}

const ItemHelpYou = ({ children, text }) => (
  <div className={`${styles.main_item} row`}>
    <div className="col-xl-6 u__no_padding">
      <div className="row u__no_margin align-items-center">
        <div className="col-xl-auto u__no_padding">
          <div className={`${styles.main_icon} blue_light_color_rgba`}>
            {children}
          </div>
        </div>
        <div className="col-xl-auto">
          <h1 className={`main_color_text ${styles.main_item_title}`}>
            {text}
          </h1>
        </div>
      </div>
    </div>
  </div>
)

export default HelpYou
