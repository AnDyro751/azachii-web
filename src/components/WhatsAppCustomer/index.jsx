import React from "react"
import styles from "./styles.module.css"
import { FaWhatsapp } from "react-icons/fa"
import { useMixpanel } from "gatsby-plugin-mixpanel"

const getRandom = () => {
  let number = Math.floor(Math.random() * 2) + 1
  if (number === 1) {
    return "529516074586"
  } else {
    return "529514085596"
  }
}

const WhatsAppCustomer = () => {
  const mixpanel = useMixpanel()
  let number = getRandom()
  return (
    <div
      onClick={() => {
        window.open(
          `https://wa.me/${number}?text=Estoy interesado en sus servicios`,
          "_blank"
        )
        mixpanel.track("contact", {
          type: "whatsapp",
          to: number,
        })
      }}
      data-tip="Contáctanos por whatsapp"
      className={`${styles.main} u__pointer u__main_box_shadow`}
      id="whatsapp"
    >
      <FaWhatsapp color="white" className={styles.icon} />
    </div>
  )
}

export default WhatsAppCustomer
