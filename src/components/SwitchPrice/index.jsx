import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
const SwitchPrice = ({ defaultLapse, handlePrice }) => {
  const [currentItem, setCurrent] = useState(defaultLapse)

  useEffect(() => {
    console.log("CHANGE", defaultLapse)
    setCurrent(defaultLapse)
  }, [defaultLapse])
  return (
    <div className="row u__no_margin justify-content-center">
      <div className="col-xl-8 u__no_padding">
        <div className="row u__small_margin_vertical justify-content-center">
          <div className="col-xl-auto">
            <SwitchItem
              handleChange={() => {
                handlePrice("month")
                setCurrent("month")
              }}
              active={currentItem}
              name="MENSUAL"
              id="month"
            />
          </div>
          <div className="col-xl-auto">
            <SwitchItem
              handleChange={() => {
                handlePrice("anual")
                setCurrent("anual")
              }}
              active={currentItem}
              name="12 MESES"
              id="anual"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const SwitchItem = ({ active, name, handleChange, id }) => {
  const IS_ACTIVE = active === id
  return (
    <div
      onClick={handleChange}
      className={`${styles.main_item} ${IS_ACTIVE &&
        styles.active} main_color_text`}
    >
      <h1>{name}</h1>
    </div>
  )
}
export default SwitchPrice
