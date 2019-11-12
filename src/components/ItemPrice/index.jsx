import React from "react"
import styles from "./styles.module.css"
import { FaCheck } from "react-icons/fa"
import { FirebaseContext } from "gatsby-plugin-firebase"

const DATA = {
  analytics: { name: "Google Analytics" },
  cart: {
    description:
      "Añade la función de carrito de compras para tener una tienda en línea",
    name: "Carrito de compras",
  },
  coupons: { description: "description coupons", name: "Cupones" },
  design: {
    description:
      "Página web construida por Azachii y personalizada  para tu negocio",
    name: "Diseño profesional",
  },
  domain: {
    description:
      "Consigue un dominio profesional para tu negocio (ej: minegocio.com). Sujeto a disponibilidad.",
    name: "Dominio personalizado",
  },
  email: {
    description: "Correo profesional tipo hola@minegocio.com",
    name: "Correo electrónico profesional",
  },
  faq: {
    description: "Agrega una sección de preguntas frecuentes.",
    name: "Preguntas frequentes",
  },
  "gift-cards": {
    description:
      "Añade tarjetas de regalo para que tus clientes los envíen a sus seres queridos",
    name: "Tarjetas de regalo",
  },
  google: {
    description:
      "Añadimos y verificamos tu negocio en google My Business, y damos de alta tu negocio en Google Maps",
    name: "Registro en los servicios de Google",
  },
  hosting: {
    available: true,
    description: "Hosting description",
    name: "Hosting",
  },
  "multi-lang": {
    description: "Agrega multiples idiomas a tu página web",
    name: "Multi idioma",
  },
  pixel: {
    description: "Agrega el pixel de facebook para aumentar tus ventas",
    name: "Facebook Pixel",
  },
  products: {
    description: "Crea productos sin limitaciones",
    name: "Productos Ilimitados",
  },
  promotions: {
    description: "Agrega promociones a tus productos, por fecha u horas ",
    name: "Promociones",
  },
  reviews: {
    description:
      "Añade reseñas a tus productos o deja que tus clientes escriban las suyas",
    name: "Reseñas",
  },
  ssl: { description: "Certificado SSL gratuito", name: "Web segura" },
  storage: {
    description: "50GB de almacenamiento para archivos, vídeos e imágenes.",
    name: "Almacenamiento",
  },
  subscriptions: {
    description:
      "Agrega la posibilidad de crear suscripciones para tus productos o servicios",
    name: "Suscripciones",
  },
  widgets: { name: "Widgets premium" },
}
const ItemPrice = ({ pricing }) => {
  const firebase = React.useContext(FirebaseContext)

  // console.log(pricing)
  return (
    <div className="col-xl-4">
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
                {/* {pricing.pricing === 0 && (
                  <button
                    onClick={() => {
                      console.log("DATA", DATA)
                      firebase
                        .firestore()
                        .doc("/pricing/S17FdAU2fm9zFX7Zaf0B")
                        .set({
                          name: "Inicio",
                          pricing: 0,
                          description: "Para negocios que van empezando",
                          benefits: { ...DATA },
                        })
                        .then(a => {
                          console.log("ACTUALIZADO")
                        })
                        .catch(e => {
                          console.log("ERROR", e)
                        })
                    }}
                  >
                    ACTUALIZAR
                  </button>
                )} */}
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
