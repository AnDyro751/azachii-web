import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { MdEmail } from "react-icons/md"
const Contact = () => {
  return (
    <div
      className={`row u__big_margin_vertical justify-content-center ${styles.box_container}`}
    >
      <div className={styles.linear}></div>
      <div className="col-xl-10 u__no_padding">
        <div className="row u__no_margin justify-content-between align-items-start">
          <div className="col-xl-5 u__no_padding">
            <h1 className="black_color_text">Estamos para ayudarte</h1>
            <h4 className="black_color_text u__normal_font">
              Responderemos todas tus preguntas con brevedad.
              <br />
              No dudes en contactarnos.
            </h4>
          </div>
          <div className={`col-xl-7 u__no_padding ${styles.form_container}`}>
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  )
}

const FormContact = () => {
  return (
    <div className="row u__no_margin">
      <div className="col-xl-12">
        <h1 className="black_color_text">Contáctanos</h1>
      </div>
      <div className="col-xl-6">
        <InputType
          autoComplete="name"
          label="Nombre"
          placeholder="Juan López"
        />
      </div>
      <div className="col-xl-6">
        <InputType
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="juanlopez@correo.com"
        />
      </div>
      <div className="col-xl-6">
        <InputType
          label="Télefoto"
          type="phone"
          autoComplete="tel"
          placeholder="juanlopez@correo.com"
        />
      </div>
      <div className="col-xl-6">
        <InputType
          autoComplete="subject"
          label="Asunto"
          type="text"
          placeholder="Asunto"
        />
      </div>
      <div className="col-xl-12">
        <p className={`${styles.label}`}>Mensaje</p>
        <textarea placeholder="Tu mensaje..." className={styles.message} />
        <button className={`${styles.send_button} blue_light_color white_color_text u__main_box_shadow`}>
          ENVIAR
        </button>
      </div>
    </div>
  )
}

const InputType = ({
  label,
  type = "text",
  placeholder = "",
  whiteColor = false,
  autoComplete = null,
}) => (
  <div className={`row u__no_margin ${styles.main_input}`}>
    <div className="col-xl-12 u__no_padding">
      <p className={`${styles.label} ${whiteColor && styles.white}`}>{label}</p>
    </div>
    <div className="col-xl-12 u__no_padding">
      <input
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        spellCheck="false"
      />
    </div>
  </div>
)

export default Contact
