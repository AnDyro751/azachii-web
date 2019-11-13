import React, { useEffect, useState } from "react"
import { useFirebase } from "gatsby-plugin-firebase"
import styles from "./styles.module.css"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { useMixpanel } from "gatsby-plugin-mixpanel"
const Tools = ({ limit = 3, showDescription = true }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "laptop-2298286_1280.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  useFirebase(firebase => {})
  const [allPromos, setPromos] = useState([])
  const mixPanel = useMixpanel()

  useFirebase(firebase => {
    let subs = firebase
      .firestore()
      .collection("tools")
      .limit(limit)
      .onSnapshot(snaps => {
        let newTools = []
        snaps.docs.forEach(doc => {
          newTools.push({ ...doc.data(), id: doc.id })
        })
        setPromos(newTools)
      })
    return () => subs()
  })

  return (
    <div className={`row u__no_margin justify-content-center`}>
      <div className={`col-xl-12 col-12 u__no_padding`}>
        <div className={`row justify-content-center u__no_margin align-items-center ${styles.main}`}>
          <div className="col-xl-4 offset-xl-1 u__no_padding d-none d-xl-block">
            <Img
              className={styles.image}
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </div>
          <div className="col-xl-5 offset-xl-1 col-11 u__no_padding">
            <h1 className={`main_color_text ${styles.main_title}`}>
              Herramientas que te harán la vida más simple
            </h1>
            <h4 className="u__normal_font main_color_text">
              Sin costo por mantenimiento, sin cobros ocultos. Todo lo que tu
              página web necesite creado especialmente para ti.
            </h4>
            <div className="row u__no_margin">
              <div className="col-xl-5 u__no_padding">
                <button
                  onClick={() => {
                    window.open("https://forms.gle/jGBNpCnUEoURBPTC7", "_blank")
                    mixPanel.track("go_to_free_form")
                    if (window.fbq) {
                      window.fbq("track", "CompleteRegistration")
                    }
                  }}
                  className={`blue_light_color white_color_text u__main_box_shadow ${styles.button}`}
                >
                  QUIERO UNA WEB GRATIS
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row u__no_margin justify-content-center">
          <div className="col-xl-11 u__no_padding">
            <div className={`row u__no_margin ${styles.main_items}`}>
              {allPromos.map(tool => (
                <ToolItem tool={tool} />
              ))}
            </div>
            {process.env.NODE_ENV === "development" && (
              <div className="row u__big_margin_vertical justify-content-center">
                <div className="col-xl-2 col-11 u__no_padding">
                  <button
                    className={`blue_light_color u__main_box_shadow white_color_text ${styles.button}`}
                  >
                    VER MÁS
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const ToolItem = ({ tool: { image_url, name, description } }) => (
  <div className="col-xl-4 col-12 u__no_padding">
    <div
      className={`row u__no_margin justify-content-center ${styles.main_item}`}
    >
      <div className="col-xl-2 col-2 u__no_padding">
        <LazyLoadImage
          className={`${styles.item_image} u__main_box_shadow`}
          src={image_url}
        />
      </div>
      <div className="col-xl-9 col-9 offset-1 offset-xl-1 u__no_padding">
        <h1 className={`black_color_text u__normal_font ${styles.title_item}`}>
          {name}
        </h1>
        <div className="separator"></div>

        <p className={`gray_color_text`}>{description}</p>
      </div>
      {/* <div className="col-xl-12 u__no_padding">
        <div className="row u__no_margin align-items-center">
          <Tag
            tag={{
              name: "Ventas",
              background: "#f44336",
              color: "white",
            }}
          />
          <Tag
            tag={{
              name: "Ecommerce",
              background: "blue",
              color: "white",
            }}
          />
        </div>
      </div> */}
    </div>
  </div>
)

const Tag = ({ tag: { name, color, background } }) => (
  <div
    style={{
      background: background,
    }}
    className={`col-xl-auto u__main_box_shadow ${styles.main_tag}`}
  >
    <p style={{ color: color }}>{name}</p>
  </div>
)

export default Tools
