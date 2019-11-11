import React from "react"
import styles from "./styles.module.css"
import { useMixpanel } from "gatsby-plugin-mixpanel"
const GetFreePage = ({}) => {
  const mixpanel = useMixpanel()

  return (
    <div className="row u__big_margin_vertical white_color justify-content-center">
      <div className="col-xl-6 col-11 u__no_padding">
        <h1 className={`black_color_text ${styles.main_title}`}>
          Empieza tu negocio en línea hoy mismo
        </h1>
        <h4 className={`${styles.description} black_color_text`}>
          Cada mes realizamos cierta cantidad de páginas web para ayudar a los
          emprendedores a iniciar un nuevo negocio online.
        </h4>
        <div className="row u__no_margin justify-content-center">
          <div
            onClick={() => {
              window.open("https://forms.gle/jGBNpCnUEoURBPTC7", "_blank")
              mixpanel.track("go_to_free_form")
              if (window.fbq) {
                window.fbq("track", "CompleteRegistration")
              }
            }}
            className={`col-xl-auto col-12 u__big_margin_vertical ${styles.button} blue_light_color white_color_text u__main_box_shadow`}
          >
            QUIERO MI WEB GRATIS
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetFreePage
