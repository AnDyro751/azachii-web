import React, { useState } from "react"
import styles from "./styles.module.css"
import SwitchPrice from "../SwitchPrice/index"
import MainPriceItems from "../MainPriceItems/index"
const MainPricing = () => {
  const [defaultLapse, setDefault] = useState("anual")
  return (
    <div
      className={`row u__no_margin justify-content-center align-items-center white_color ${styles.main}`}
    >
      <div className="col-xl-12 col-11 u__no_padding">
        <div className="row u__no_margin justify-content-center">
          <div className="col-xl-10 col-12 u__no_padding">
            <h1
              className={`black_color_text u__text_center ${styles.main_title}`}
            >
              Todo lo que necesitas para empezar
              <br /> <span>con tu negocio online</span>
            </h1>
          </div>
          <div className="col-xl-12 u__no_padding">
            <SwitchPrice
              handlePrice={e => {
                setDefault(e)
              }}
              defaultLapse={defaultLapse}
            />
          </div>
          {defaultLapse === "month" && (
            <div className="col-xl-auto col-auto">
              <p
                onClick={() => {
                  setDefault("anual")
                }}
                className={`${styles.offert} blue_light_color white_color_text u__text_center`}
              >
                Ahorra hasta un 20% con el plan anual
              </p>
            </div>
          )}
        </div>
      </div>
      <div
        className={`col-xl-12 u__no_padding blue_light_color ${styles.main_items}`}
      >
        <MainPriceItems currentLapse={defaultLapse} />
      </div>
    </div>
  )
}

export default MainPricing
