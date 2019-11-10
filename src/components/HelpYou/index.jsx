import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { FaCode, FaShoppingCart, FaGooglePlay } from "react-icons/fa"
import { GoDeviceCameraVideo } from "react-icons/go"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { LazyLoadImage } from "react-lazy-load-image-component"
import phone from "../../images/phone_component.png"
import mac from "../../images/web_mac.png"
import camera from "../../images/camera-2030726_1920.jpg"
import Fade from "react-reveal/Fade"
import classnames from "classnames"
const HelpYou = () => {
  const [currentImage, setCurrentImage] = useState(mac)
  const [currentName, setCurrent] = useState("web")
  const class_container = classnames({
    "col-xl-6 u__no_padding": true,
    main_color: currentName === "phone",
    red_light_color: currentName === "web",
    dark_color: currentName === "camera",
    [styles.main]: true,
  })
  return (
    <div className="row u__no_margin justify-content-center">
      <div className="col-xl-12 col-12 u__no_padding">
        <div className="row u__no_margin justify-content-center">
          <div className="col-xl-5 col-11 offset-xl-1 u__no_padding">
            <h1
              className={`main_color_text main_font ${styles.main_title}`}
            >
              Estamos aquí para <br className="d-none d-xl-block" />
              ayudarte con
            </h1>
            <ItemHelpYou
              handleEnter={name => {
                setCurrent("web")
                setCurrentImage(mac)
              }}
              name="shop"
              text="Tu tienda en linea"
            >
              <FaShoppingCart className="main_color_text" size={20} />
            </ItemHelpYou>
            <ItemHelpYou
              handleEnter={name => {
                setCurrent("phone")
                setCurrentImage(phone)
              }}
              name="app"
              text="Aplicación móvil"
            >
              <FaGooglePlay className="main_color_text" size={20} />
            </ItemHelpYou>
            <ItemHelpYou
              handleEnter={name => {
                setCurrent("camera")
                setCurrentImage(camera)
              }}
              name="multimedia"
              text="Producción multimedia"
            >
              <GoDeviceCameraVideo className="main_color_text" size={20} />
            </ItemHelpYou>
          </div>
          <div className={class_container}>
            <div className={styles.main_data_container}>
              <Fade right>
                <LazyLoadImage
                  style={{
                    height: "400px",
                    width: "auto",
                  }}
                  src={currentImage}
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ItemHelpYou = ({ children, text, name, handleEnter }) => (
  <Fade left>
    <div
      onClick={() => {
        handleEnter(name)
      }}
      onMouseEnter={() => {
        handleEnter(name)
      }}
      className={`${styles.main_item} row`}
    >
      <div className="col-xl-12 col-12 u__no_padding">
        <div className="row u__no_margin align-items-center">
          <div className="col-xl-auto col-auto u__no_padding">
            <div className={`${styles.main_icon} blue_light_color_rgba`}>
              {children}
            </div>
          </div>
          <div className="col-xl-auto col-auto" style={{paddingRight: 0}}>
            <h1 className={`main_color_text ${styles.main_item_title}`}>
              {text}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </Fade>
)

export default HelpYou
