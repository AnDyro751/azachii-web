import React from "react"
import styles from "./styles.module.css"
import firebaseSVG from "../../images/firebase-1.svg"
import cloud from "../../images/google-cloud.svg"
import reactSVG from "../../images/react.svg"
import rails from "../../images/rails-1.svg"
import android from "../../images/android.svg"
import ios from "../../images/apple.svg"
import photoshop from "../../images/photoshop.svg"
import premiere from "../../images/premiere.svg"
import figma from "../../images/figma.svg"
import { useMixpanel } from "gatsby-plugin-mixpanel"

const CodeIcons = ({ big }) => {
  const mixPanel = useMixpanel()
  return (
    <div className={`col-xl-12 ${big ? "" : "col-sm-11"} u__no_padding`}>
      <div
        className={`row u__no_margin align-items-center ${
          big ? "justify-content-center" : ""
        }`}
      >
        <div
          onMouseEnter={() => {
            mixPanel.track("code_icon_hover", {
              type: "enter",
            })
          }}
          onMouseLeave={() => {
            mixPanel.track("code_icon_hover", {
              type: "leave",
            })
          }}
          data-tip="React js"
          data-scroll-hide={true}
          data-iscapture={false}
          className={`col-xl-auto col-auto ${
            big ? "" : "hide_on_mobile"
          } first_code_icon ${styles.main_image}`}
        >
          <img
            src={reactSVG}
            className={
              big
                ? `${styles.code_icon_big} ${styles.icon_separate_from_bottom}`
                : styles.code_icon_small
            }
          />
        </div>
        <div
          onMouseEnter={() => {
            mixPanel.track("code_icon_hover", {
              type: "enter",
            })
          }}
          onMouseLeave={() => {
            mixPanel.track("code_icon_hover", {
              type: "leave",
            })
          }}
          data-tip="Firebase"
          className={`${big ? "" : "hide_on_mobile"} col-xl-auto col-auto ${
            styles.main_image
          }`}
        >
          <img
            src={firebaseSVG}
            className={
              big
                ? `${styles.code_icon_big} ${styles.icon_separate_from_bottom}`
                : styles.code_icon_small
            }
          />
        </div>
        <div
          onMouseEnter={() => {
            mixPanel.track("code_icon_hover", {
              type: "enter",
            })
          }}
          onMouseLeave={() => {
            mixPanel.track("code_icon_hover", {
              type: "leave",
            })
          }}
          data-tip="Google Cloud"
          className={`col-xl-auto col-auto ${
            big ? "" : "hide_on_small_mobile"
          } ${styles.main_image}`}
        >
          <img
            src={cloud}
            className={
              big
                ? `${styles.code_icon_big} ${styles.icon_separate_from_bottom}`
                : styles.code_icon_small
            }
          />
        </div>
        <div
          onMouseEnter={() => {
            mixPanel.track("code_icon_hover", {
              type: "enter",
            })
          }}
          onMouseLeave={() => {
            mixPanel.track("code_icon_hover", {
              type: "leave",
            })
          }}
          data-tip="Ruby on Rails"
          className={`col-xl-auto col-auto ${big ? "" : "hide_on_mobile"} ${
            styles.main_image
          }`}
        >
          <img
            src={rails}
            className={
              big
                ? `${styles.code_icon_big} ${styles.icon_separate_from_bottom}`
                : styles.code_icon_small
            }
          />
        </div>
        <div
          onMouseEnter={() => {
            mixPanel.track("code_icon_hover", {
              type: "enter",
            })
          }}
          onMouseLeave={() => {
            mixPanel.track("code_icon_hover", {
              type: "leave",
            })
          }}
          data-tip="React Native Android Apps"
          className={`col-xl-auto col-auto ${styles.main_image}`}
        >
          <img
            src={android}
            className={
              big
                ? `${styles.code_icon_big} ${styles.icon_separate_from_bottom}`
                : styles.code_icon_small
            }
          />
        </div>
        <div
          onMouseEnter={() => {
            mixPanel.track("code_icon_hover", {
              type: "enter",
            })
          }}
          onMouseLeave={() => {
            mixPanel.track("code_icon_hover", {
              type: "leave",
            })
          }}
          data-tip="React Native IOS Apps"
          className={`col-xl-auto col-auto ${styles.main_image}`}
        >
          <img
            src={ios}
            className={
              big
                ? `${styles.code_icon_big} ${styles.icon_separate_from_bottom}`
                : styles.code_icon_small
            }
          />
        </div>
        <div
          onMouseEnter={() => {
            mixPanel.track("code_icon_hover", {
              type: "enter",
            })
          }}
          onMouseLeave={() => {
            mixPanel.track("code_icon_hover", {
              type: "leave",
            })
          }}
          data-tip="Figma"
          className={`col-xl-auto col-auto ${styles.main_image}`}
        >
          <img
            src={figma}
            className={
              big
                ? `${styles.code_icon_big} ${styles.icon_separate_from_bottom}`
                : styles.code_icon_small
            }
          />
        </div>
        <div
          onMouseEnter={() => {
            mixPanel.track("code_icon_hover", {
              type: "enter",
            })
          }}
          onMouseLeave={() => {
            mixPanel.track("code_icon_hover", {
              type: "leave",
            })
          }}
          data-tip="Adobe Photoshop"
          className={`col-xl-auto col-auto ${styles.main_image}`}
        >
          <img
            src={photoshop}
            className={
              big
                ? `${styles.code_icon_big} ${styles.icon_separate_from_bottom}`
                : styles.code_icon_small
            }
          />
        </div>
        <div
          onMouseEnter={() => {
            mixPanel.track("code_icon_hover", {
              type: "enter",
            })
          }}
          onMouseLeave={() => {
            mixPanel.track("code_icon_hover", {
              type: "leave",
            })
          }}
          data-tip="Adobe Premiere"
          className={`col-xl-auto col-auto ${styles.main_image}`}
        >
          <img
            src={premiere}
            className={
              big
                ? `${styles.code_icon_big} ${styles.icon_separate_from_bottom}`
                : styles.code_icon_small
            }
          />
        </div>
      </div>
      <style>{`
      @media screen and (min-width: 767px) {
        .first_code_icon {
          padding-left: 0;
        }
      }
    `}</style>
    </div>
  )
}

export default CodeIcons
