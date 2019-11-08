import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import Modal from "react-modal"
import { useFirebase } from "gatsby-plugin-firebase"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

const WebPage = ({}) => {

  const [benefits, setBenefits] = useState([])
  const [loading, setLoading] = useState(true)
  useFirebase(firebase => {
    firebase
      .firestore()
      .collection("benefits")
      .where("kind", "array-contains", "web")
      .get()
      .then(data => {
        let newBenefits = []
        data.docs.forEach(doc => {
          newBenefits.push({ ...doc.data(), id: doc.id })
        })
        setBenefits(newBenefits)
        setLoading(false)
        // console.log("DATA", data.docs)
      })
      .catch(e => {
        console.log("ERROR", e)
      })
    // console.log(firebase, "firebase")
  })
  useEffect(() => {
    Modal.setAppElement("#modal_data")
  }, [])

  return (
    <div
      className={`row u__big_margin_vertical white_color ${styles.main_container}`}
    >
      <div className="col-xl-5 offset-1">
        <h2 className="black_color_text">Páginas web & E-commerce</h2>
        <h1 className="black_color_text">
          Todo lo que necesitas para empezar con tu negocio online
        </h1>
        <div className="row u__big_margin_vertical">
          <div className="col-xl-auto u__no_padding">
            <div
              className={`blue_light_color white_color_text ${styles.button}`}
            >
              QUIERO UNA WEB GRATIS
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="row u__no_mrgin justify-content-start">
          <div className="col-xl-6 u__no_padding">
            {benefits.slice(0.6).map((benefit, i) => (
              <ItemTag text={benefit.name} key={i} />
            ))}
            {loading}
            {/* <ItemTag text="Pagos" />
            <ItemTag text="Suscripciones" />
            <ItemTag text="Referidos" />
            <ItemTag text="Certificado SSL" />
            <ItemTag text="Productos ilimitados" />
            <ItemTag text="Google Maps" />
            <ItemTag text="Multi Idioma" /> */}
          </div>
          <div className="col-xl-6">
            <ItemTag text="Cupones" />
            <ItemTag text="Tarjeta de regalos" />
            <ItemTag text="50GB ancho de banda" />
            <ItemTag text="Google Analytics" />
            <ItemTag text="Facebook Pixel" />
            <ItemTag text="Formulario de contacto" />
            <ItemTag text="Actualizaciones en tiempo real" />
          </div>
        </div>
      </div>
    </div>
  )
}
const ItemTag = ({ text, description = null, image = null }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div id="modal_data">
        <Modal
          isOpen={open}
          onRequestClose={() => {
            setOpen(false)
          }}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>I am a modal</div>
        </Modal>
      </div>
      <div
        onClick={() => {
          setOpen(true)
        }}
        className={`col-xl-12 u__no_padding ${styles.main_item}`}
      >
        <p className="main_font black_color_text">{text}</p>
      </div>
    </>
  )
}

export default WebPage
