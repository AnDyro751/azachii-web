import React from "react"
import styles from "./styles.module.css"
import { FaCheck } from "react-icons/fa"
const ItemPrice = ({ pricing }) => {
  return (
    <div className="col-xl-3">
      <div className="row u__no_margin">
        <div className="col-xl-12 u__no_padding">
          <div
            className={`white_color ${styles.main_item} row u__no_margin justify-content-center`}
          >
            <div className="col-xl-12 u__no_padding">
              <h1 className={`main_color_text ${styles.main_title}`}>
                {pricing.name}
              </h1>
              <h3 className={`${styles.pricing} black_color_text`}>
                {pricing.pricing === 0 ? "GRATIS" : `${pricing.pricing}`}
                {pricing.pricing > 0 && <span>&#160;USD</span>}
              </h3>
              <h4 className="main_color_text u__text_center">
                {pricing.description}
              </h4>
            </div>
            <div className="col-xl-12">
              <button
                className={`${styles.button} blue_light_color u__main_box_shadow`}
              >
                Seleccionar {pricing.name}
              </button>
            </div>
            <div className="col-xl-12 u__no_padding">
              <Benefits benefits={pricing.benefits} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Benefits = ({ benefits }) => {
  const items = []
  for (let index in benefits) {
    items.push(<BenefitItem key={index} benefit={benefits[index]} />)
  }

  return (
    <div className="row u__no_margin">
      <div className="col-xl-12 u__no_padding">{items}</div>
    </div>
  )
}

const BenefitItem = ({ benefit }) => (
  <div className="row u__small_margin_bottom align-items-start">
    <div className="col-xl-2 u__no_padding u__text_center">
      <FaCheck color="#2e7d32" size={20} />
    </div>
    <div className="col-xl-10">
      <p className={`black_color_text ${styles.main_benefit}`}>
        {benefit.name}
      </p>
      <p className={`${styles.main_item_description} black_color_text`}>
        {benefit.description}
      </p>
    </div>
  </div>
)

export default ItemPrice
