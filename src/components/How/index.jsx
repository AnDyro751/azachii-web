import React from "react"
import styles from "./styles.module.css"
import { GoPencil } from "react-icons/go"
import { FaInfo } from "react-icons/fa"
import Fade from "react-reveal/Fade"

const How = ({}) => (
  <div
    className={`row u__no_margin justify-content-center accent_light_color ${styles.main}`}
  >
    <div className="col-xl-11 u__no_padding">
      <div className="row u__no_margin">
        <div className="col-xl-12 u__no_padding">
          <Fade left>
            <h1 className={`accent_color_text_dark ${styles.title}`}>
              ¿Cómo funciona?
            </h1>
          </Fade>
        </div>
      </div>
      <div className="row u__big_margin_vertical">
        <HowItem
          step={1}
          text="Al rellenar el formulario te pedimos algunos datos sobre tu negocio,
        que nos ayudarán a conocer mejor tu negocio."
          more="En esta fase nuestro equipo decide sí tu negocio aplica para el
        sitio web gratuito."
          title="Solicitamos información de tu negocio"
        >
          <FaInfo className="white_color_text" size={14} />
        </HowItem>
        <HowItem
          step={2}
          title="Aceptamos tu proyecto"
          text="Después que nuestro equipo toma la decisión de aceptar tu proyecto"
          more="En esta fase nuestro equipo decide sí tu negocio aplica para el
        sitio web gratuito."
        >
          <GoPencil className="accent_color_text_dark" size={14} />
        </HowItem>
        <HowItem
          step={1}
          text="Al rellenar el formulario te pedimos algunos datos sobre tu negocio,
        que nos ayudarán a conocer mejor tu negocio."
          more="En esta fase nuestro equipo decide sí tu negocio aplica para el
        sitio web gratuito."
          title="Solicitamos información de tu negocio"
        >
          <GoPencil className="white_color_text" size={15} />
        </HowItem>
      </div>
    </div>
  </div>
)

const HowItem = ({ children, step, text, more = null, title }) => (
  <Fade right>
    <div className={`col-xl-4`}>
      <div className={` ${styles.main_item} white_color u__main_box_shadow`}>
        <div className="row u__no_margin">
          <div className="col-xl-12 u__no_padding">
            <div className="row u__no_margin justify-content-between align-items-center">
              <div className="col-xl-auto u__no_padding">
                <p className={`accent_color_text_dark ${styles.item_step}`}>
                  Paso {step}
                </p>
              </div>
              <div className="col-xl-auto u__no_padding">
                <div className={`${styles.children} accent_color_dark`}>
                  {children}
                </div>
              </div>
            </div>
            <h1 className={`accent_color_text_dark ${styles.item_title}`}>
              {title}
            </h1>
            <h5 className={`black_color_text ${styles.description}`}>{text}</h5>
            {more && (
              <h5 className={`black_color_text ${styles.description}`}>
                {more}
              </h5>
            )}
          </div>
        </div>
      </div>
    </div>
  </Fade>
)

export default How
