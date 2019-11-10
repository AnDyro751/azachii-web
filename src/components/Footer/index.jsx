import React from "react"
import styles from "./styles.module.css"
import { Link } from "gatsby"
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa"
const Footer = ({
  custom_class = "white_color",
  text_color = "black_color_text",
  divider = "white_color",
}) => (
  <div
    className={`row u__no_margin justify-content-center popodeperro ${custom_class} ${styles.footer}`}
  >
    <div className="col-xl-10 col-11 u__no_padding">
      <div className={`${styles.divider} ${divider}`}></div>

      <div className="row u__no_margin align-items-xl-center align-items-start">
        <div className="col-xl-2 col-12 u__no_padding u__small_margin_vertical">
          <h1 className={`${text_color} ${styles.title}`}>Azachii</h1>
        </div>
        <div className="col-xl-8 col-6 u__no_padding align-items-xl-start align-items-start">
          <div className="row u__no_margin justify-content-xl-center justify-content-start align-items-center">
            <Link
              to="/"
              className={`col-xl-auto col-12 u__no_padding_in_mobile ${text_color} ${styles.item}`}
            >
              Servicios
            </Link>
            <Link
              to="/"
              className={`col-xl-auto col-12 u__no_padding_in_mobile ${text_color} ${styles.item}`}
            >
              Contacto
            </Link>
            <Link
              to="/"
              className={`col-xl-auto col-12 u__no_padding_in_mobile ${text_color} ${styles.item}`}
            >
              Equipo
            </Link>
            <Link
              to="/"
              className={`col-xl-auto col-12 u__no_padding_in_mobile ${text_color} ${styles.item}`}
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
        <div className="col-xl-2 col-6 u__no_padding">
          <div className="row u__no_margin justify-content-xl-end justify-content-start align-items-center">
            <div
              data-tip="Repositorios de Github"
              className="col-xl-auto col-auto u__no_padding u__pointer"
            >
              <FaGithub className={text_color} />
            </div>
            <div
              data-tip="Síguenos por facebook"
              className="col-xl-auto col-auto u__pointer"
            >
              <FaFacebookF className={text_color} />
            </div>
            <div
              data-tip="Síguenos por instagram"
              className="col-xl-auto col-auto u__no_padding u__pointer"
            >
              <FaInstagram className={text_color} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
