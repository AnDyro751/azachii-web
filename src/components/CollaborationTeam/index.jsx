import React from "react"
import styles from './styles.module.css'
const CollaborationTeam = () => (
  <div
    className="row u__no_margin align-items-center justify-content-center"
    style={{ height: "100vh" }}
  >
    <div className="col-11 col-lg-10 u__no_padding">
      <div className="row u__no_margin">
        <div className="col-xl-8 u__no_padding">
          <h1 className={`${styles.service_page_title} black_color_text main_font`}>
            Un proceso basado en colaboración
          </h1>
          <div className="separator" />
          <p className={`${styles.service_page_message} black_color_text`}>
            Nuestros servicios de diseño, producción multimedia e ingeniería son
            transparentes y flexibles.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default CollaborationTeam
