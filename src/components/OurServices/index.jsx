import React from "react"
import styles from "./styles.module.css"
import {
  MdGTranslate,
  MdPhoneIphone,
  MdInsertChart,
  MdTextFields,
  MdImage,
  MdBugReport,
  MdGpsFixed,
} from "react-icons/md"
import {
  FaUserAlt,
  FaDollarSign,
  FaHandHoldingUsd,
  FaPercentage,
  FaBell,
  FaStar,
} from "react-icons/fa"
import { DiGoogleAnalytics } from "react-icons/di"
const OurServices = () => (
  <div
    className={`row u__no_margin justify-content-center accent_light_color ${styles.main}`}
  >
    <div className="col-xl-10 col-11 u__no_padding">
      <div className="row u__no_margin justify-content-center">
        <div className="col-xl-6 col-12 u__no_padding">
          <h1 className={`black_color_text ${styles.main_title}`}>
            Una suite de características completas para hacer realidad su idea.
          </h1>
        </div>
      </div>
      <div className="row u__no_margin align-items-center">
        <ItemService title="Multi Idioma">
          <MdGTranslate
            color="#181818"
            size={22}
            className={` ${styles.children}`}
          />
        </ItemService>
        <ItemService title="Responsive">
          <MdPhoneIphone
            color="#181818"
            size={22}
            className={` ${styles.children}`}
          />
        </ItemService>
        <ItemService title="Reconocimiento de texto">
          <MdTextFields
            color="#181818"
            size={22}
            className={` ${styles.children}`}
          />
        </ItemService>
        <ItemService title="Etiquetado de imágenes">
          <MdImage
            color="#181818"
            size={22}
            className={` ${styles.children}`}
          />
        </ItemService>
        <ItemService title="A/B testing">
          <MdBugReport
            color="#181818"
            size={22}
            className={` ${styles.children}`}
          />
        </ItemService>
        <ItemService title="Registro de usuarios">
          <FaUserAlt
            color="#181818"
            size={22}
            className={` ${styles.children}`}
          />
        </ItemService>

        <ItemService title="Analíticas">
          <MdInsertChart
            color="#181818"
            size={22}
            className={` ${styles.children}`}
          />
        </ItemService>
        <ItemService title="Pagos">
          <FaDollarSign
            color="#181818"
            size={22}
            className={` ${styles.children}`}
          />
        </ItemService>
        <ItemService title="Suscripciones">
          <FaHandHoldingUsd
            color="#181818"
            className={` ${styles.children}`}
            size={22}
          />
        </ItemService>
        <ItemService title="Descuentos y promociones">
          <FaPercentage
            color="#181818"
            className={` ${styles.children}`}
            size={22}
          />
        </ItemService>
        <ItemService title="Notificaciones">
          <FaBell color="#181818" className={` ${styles.children}`} size={22} />
        </ItemService>
        <ItemService title="Reseñas">
          <FaStar color="#181818" className={` ${styles.children}`} size={22} />
        </ItemService>
        <ItemService title="Gelocalización">
          <MdGpsFixed
            color="#181818"
            className={` ${styles.children}`}
            size={22}
          />
        </ItemService>
      </div>
    </div>
  </div>
)

const ItemService = ({ title, children }) => (
  <div className="col-xl-3 col-6">
    <div
      className={`row u__no_margin justify-content-center ${styles.main_service}`}
    >
      <div className={`col-xl-auto col-auto u__no_padding`}>{children}</div>
      <div className="col-xl-12 u__no_padding">
        <h2 className={`black_color_text ${styles.service_title}`}>{title}</h2>
      </div>
    </div>
  </div>
)

export default OurServices
