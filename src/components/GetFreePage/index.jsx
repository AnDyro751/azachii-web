import React from "react"
import styles from "./styles.module.css"
const GetFreePage = ({}) => {
  return (
    <div className="row u__big_margin_vertical white_color justify-content-center">
      <div className="col-xl-6 u__no_padding">
        <h1 className={`black_color_text ${styles.main_title}`}>
          Empieza tu negocio en línea hoy mismo
        </h1>
        <h4 className={`${styles.description} black_color_text`} >
            Cada mes realizamos cierta cantidad de páginas web para ayudar a los emprendedores a iniciar un nuevo negocio online.
        </h4>
        <div className="row u__no_margin justify-content-center">
            <div className={`col-xl-auto u__big_margin_vertical ${styles.button} blue_light_color white_color_text u__main_box_shadow`}>
                Quiero mi web gratis
            </div>
        </div>
      </div>
    </div>
  )
}

export default GetFreePage
