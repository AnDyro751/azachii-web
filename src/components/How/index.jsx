import React from "react"
import styles from "./styles.module.css"
import { GoPencil } from "react-icons/go"
import { FaInfo, FaStar, FaHeart } from "react-icons/fa"
import Fade from "react-reveal/Fade"

const How = ({}) => (
  <div
    className={`row u__no_margin justify-content-center ${styles.main}`}
  >
    <div className="col-xl-10 col-12 u__no_padding">
      <div className="row u__no_margin justify-content-center">
        <div className="col-xl-12 col-11 u__no_padding">
          <Fade left>
            <h1 className={`black_color_text ${styles.title}`}>
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
          title="Solicitamos información"
        >
          <FaInfo className="white_color_text" size={14} />
        </HowItem>
        <HowItem
          step={2}
          title="Aceptamos tu proyecto"
          text="Después que nuestro equipo acepta tu proyecto nos ponemos en contacto contigo para solicitar información acerca de tu nuevo sitio web."
          more="Paleta de colores, logo, qué servicios ofreces.Cuánta más información, mejor podemos crear tu web."
        >
          <FaHeart className="white_color_text" size={14} />
        </HowItem>
        <HowItem
          step={1}
          text="Y ya es todo, a partir del primer día te envíamos un link donde puedes ver el progreso de tu página en tiempo real."
          more="Después que nos des luz verde tu sitio estará en línea en menos de 7 días."
          title="Tu sitio está listo"
        >
          <FaStar className="white_color_text" size={15} />
        </HowItem>
      </div>
    </div>
  </div>
)

const HowItem = ({ children, step, text, more = null, title }) => (
  <Fade right>
    <div className={`col-xl-4 col-12`}>
      <div className={` ${styles.main_item} white_color u__main_box_shadow`}>
        <div className="row u__no_margin">
          <div className="col-xl-12 col-12 u__no_padding">
            <div className="row u__no_margin justify-content-between align-items-center">
              <div className="col-xl-auto col-auto u__no_padding">
                <p className={`black_color_text ${styles.item_step}`}>
                  Paso {step}
                </p>
              </div>
              <div className="col-xl-auto col-auto u__no_padding">
                <div
                  className={`${styles.children} blue_light_color u__main_box_shadow`}
                >
                  {children}
                </div>
              </div>
            </div>
            <h1 className={`black_color_text ${styles.item_title}`}>
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
