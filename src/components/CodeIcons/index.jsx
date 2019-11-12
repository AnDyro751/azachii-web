import React from "react"
import styles from "./styles.module.css"
import firebaseSVG from "../../images/firebase-1.svg"
import cloud from "../../images/google-cloud.svg"
import reactSVG from "../../images/react.svg"
import rails from "../../images/rails-1.svg"
import android from "../../images/android.svg"
import ios from "../../images/apple.svg"

const CodeIcons = ({ big = false }) => (
  <div className="col-xl-12 col-sm-11 u__no_padding">
    <div className="row u__no_margin align-items-center">
      <div
        data-tip="React js"
        data-scroll-hide={true}
        data-iscapture={false}
        className={`col-xl-auto col-auto ${styles.main_image}`}
      >
        <img src={reactSVG} />
      </div>
      <div data-tip="Firebase" className={`col-xl-auto col-auto ${styles.main_image}`}>
        <img src={firebaseSVG} />
      </div>
      <div
        data-tip="Google Cloud"
        className={`col-xl-auto col-auto ${styles.main_image}`}
      >
        <img src={cloud} />
      </div>
      <div
        data-tip="Ruby on Rails"
        className={`col-xl-auto col-auto ${styles.main_image}`}
      >
        <img src={rails} />
      </div>
      <div
        data-tip="React Native Android Apps"
        className={`col-xl-auto col-auto ${styles.main_image}`}
      >
        <img src={android} />
      </div>
      <div
        data-tip="React Native IOS Apps"
        className={`col-xl-auto col-auto ${styles.main_image}`}
      >
        <img
          src={ios}
          style={{
            height: "30px",
          }}
        />
      </div>
    </div>
    <style>{`
        @media(min-width: 576px) and (max-width: 768px) {
          .react-icon {
            padding-left: 0;
           
          }
        }
      `}</style>
  </div>
)

export default CodeIcons
