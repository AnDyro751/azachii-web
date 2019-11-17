import React, { useState } from "react"
import styles from "./styles.module.css"
import { FirebaseContext } from "gatsby-plugin-firebase"
import { Element } from "react-scroll"

const Contact = () => {
  return (
    <Element
      name="contact_form"
      className={`row u__big_margin_vertical justify-content-center ${styles.box_container}`}
    >
      <div className={styles.linear}></div>
      <div className="col-xl-10 col-11 u__no_padding">
        <div className="row u__no_margin justify-content-between align-items-start">
          <div className="col-xl-5 col-11 u__no_padding">
            <h2 className={`black_color_text ${styles.main_title}`}>
              Estamos para ayudarte
            </h2>
            <h4 className={`${styles.send} black_color_text u__normal_font`}>
              Responderemos todas tus preguntas con brevedad.
              <br />
              No dudes en contactarnos.
            </h4>
          </div>
          <div
            className={`col-xl-7 col-12 u__no_padding ${styles.form_container}`}
          >
            <FormContact />
          </div>
        </div>
      </div>
    </Element>
  )
}

const FormContact = () => {
  const [fields, setFields] = useState({})
  const [loading, setLoading] = useState(false)
  const [contact, setContact] = useState(false)
  const firebase = React.useContext(FirebaseContext)
  const [valid, setValid] = useState(false)
  const [valid_fields, setValidFields] = useState(new Array(5).fill(false))
  const [edited_fields, setEditedFields] = useState(new Array(5).fill(false))

  const handleChange = ({ target }) => {
    setFields(
      Object.assign({
        ...fields,
        [target.name]: target.value,
      })
    )
    if (!edited_fields[Number.parseInt(target.id)]) {
      if (target.value !== "") {
        const new_edited_fields = edited_fields
        new_edited_fields[Number.parseInt(target.id)] = true
        setEditedFields(new_edited_fields)
      }
    }
    const new_valid_fields = valid_fields
    switch (target.type) {
      case "email":
        new_valid_fields[
          Number.parseInt(target.id)
        ] = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          target.value
        )
        break
      case "tel":
        new_valid_fields[Number.parseInt(target.id)] = /^\d{10}$/.test(
          target.value
        )
        break
      default:
        new_valid_fields[Number.parseInt(target.id)] =
          target.value.length >= Number.parseInt(target.minLength) &&
          target.value.length <= Number.parseInt(target.maxLength)
    }
    setValidFields(new_valid_fields)
    setValid(new_valid_fields.filter(item => item === false).length === 0)
  }

  return (
    <div className="row u__no_margin contact_form">
      {contact ? (
        <div
          className="col-xl-12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: contact
              ? document.getElementById("contact_form").clientHeight
              : 0,
          }}
        >
          <p style={{ fontWeight: "bold", color: "#4e4e4e", fontSize: "2em" }}>
            Gracias por contactarnos.
            <p>Te atenderemos en breve.</p>
          </p>
        </div>
      ) : (
        <div id="contact_form" className="col-xs-12 u__no_padding">
          <div className="row u__no_margin">
            <div className="col-xl-12">
              <h2 className={`black_color_text ${styles.main_title}`}>
                Contáctanos
              </h2>
            </div>
            <div className="col-xl-6 col-12">
              <InputType
                autoComplete="name"
                label="Nombre"
                placeholder="Richard Hendricks"
                onChange={handleChange}
                name="name"
                id={0}
                minLength={3}
                maxLength={20}
                valid={valid_fields[0]}
                edited={edited_fields[0]}
              />
            </div>
            <div className="col-xl-6 col-12">
              <InputType
                label="Email"
                type="email"
                autoComplete="email"
                placeholder="richard@piedpiper.com"
                onChange={handleChange}
                name="email"
                id={1}
                valid={valid_fields[1]}
                edited={edited_fields[1]}
              />
            </div>
            <div className="col-xl-6 col-12">
              <InputType
                label="Télefoto"
                type="tel"
                autoComplete="tel"
                placeholder="xxxxxxxxxx"
                onChange={handleChange}
                name="phone"
                id={2}
                valid={valid_fields[2]}
                edited={edited_fields[2]}
              />
            </div>
            <div className="col-xl-6 col-12">
              <InputType
                autoComplete="subject"
                label="Asunto"
                type="text"
                placeholder="Tu mensaje..."
                onChange={handleChange}
                name="subject"
                minLength={4}
                maxLength={30}
                id={3}
                valid={valid_fields[3]}
                edited={edited_fields[3]}
              />
            </div>
            <div className="col-xl-12 col-12">
              <p className={`${styles.label}`}>Mensaje</p>
              <textarea
                id={4}
                minLength={4}
                maxLength={300}
                onChange={handleChange}
                name="message"
                placeholder="¿Como ingreso mi negocio al mundo digital?"
                className={`${styles.message} ${
                  !valid_fields[4] && edited_fields[4]
                    ? styles.main_input_wrong
                    : ""
                }`}
              />
              <button
                disabled={loading || !valid}
                className={`${styles.send_button} ${
                  valid ? "blue_light_color" : "disabled_color"
                } white_color_text u__main_box_shadow`}
                style={{
                  float: "right",
                  cursor: loading || !valid ? "auto" : "pointer",
                }}
                onClick={() => {
                  setLoading(true)
                  firebase
                    .firestore()
                    .collection("contact")
                    .add(fields)
                    .then(() => {
                      setContact(true)
                    })
                  setLoading(false)
                }}
              >
                {loading ? (
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  "ENVIAR"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const InputType = ({
  label,
  type = "text",
  placeholder = "",
  whiteColor = false,
  autoComplete = null,
  onChange,
  name,
  id,
  minLength,
  maxLength,
  valid,
  edited,
}) => (
  <div className={`row u__no_margin ${styles.main_input}`}>
    <div className="col-xl-12 u__no_padding">
      <p className={`${styles.label} ${whiteColor && styles.white}`}>{label}</p>
    </div>
    <div className="col-xl-12 u__no_padding">
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        spellCheck="false"
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        className={`${!valid && edited ? styles.main_input_wrong : ""}`}
      />
    </div>
  </div>
)

export default Contact
