import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { useFirebase } from "gatsby-plugin-firebase"
import classnames from "classnames"
const WebPage = ({}) => {
  const [benefits, setBenefits] = useState([])
  const [loading, setLoading] = useState(true)
  const [hidden_more, setHidden] = useState(true)
  useFirebase(firebase => {
    firebase
      .firestore()
      .collection("benefits")
      .orderBy("name", "asc")
      //   .where("kind", "array-contains", "web")
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

  const class_more = classnames({
    "col-xl-6 col-12 u__no_padding_in_mobile": true,
    [styles.invisible]: hidden_more,
  })

  return (
    <div
      className={`row u__small_margin_vertical white_color ${styles.main_container} justify-content-center`}
    >
      <div className="col-xl-5 offset-xl-1 col-11 u__no_padding">
        <h2 className="black_color_text">Páginas web & E-commerce</h2>
        <h1 className={`${styles.main_title} black_color_text`}>
          Todo lo que necesitas para empezar con tu negocio online
        </h1>
        <div className="row u__big_margin_vertical">
          <div className="col-xl-auto col-12 u__no_padding">
            <div
              className={`blue_light_color white_color_text ${styles.button}`}
            >
              QUIERO UNA WEB GRATIS
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-11">
        <div className="row u__no_mrgin justify-content-start">
          <div className="col-xl-6 col-12 u__no_padding">
            {benefits.slice(0, 7).map((benefit, i) => (
              <ItemTag benefit={benefit} key={i} />
            ))}
          </div>

          <div className={class_more}>
            {benefits.slice(7).map((benefit, i) => (
              <ItemTag benefit={benefit} key={i} />
            ))}
          </div>
          <div
            onClick={() => setHidden(!hidden_more)}
            className="d-block d-sm-none col-12 u__no_padding"
          >
            <p className="main_color_text" >{hidden_more ? "Ver más": "Ver menos"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
const ItemTag = ({ benefit }) => {
  return (
    <>
      <div className={`col-xl-12 u__no_padding ${styles.main_item}`}>
        <p className="main_font black_color_text">{benefit.name}</p>
      </div>
    </>
  )
}

export default WebPage
