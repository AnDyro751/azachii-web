import React from "react"
import styles from "./styles.module.css"
import { FaAndroid, FaApple, FaShoppingBag } from "react-icons/fa"
import { AiFillShopping } from "react-icons/ai"
import MainBanner from "../Home/MainBanner"
import CodeIcons from "../CodeIcons/index"

const OurProducts = () => (
  <div className="row u__big_margin_vertical justify-content-center">
    <div className="col-xl-11 col-12 u__no_padding">
      <div
        className={`${styles.main} align-items-center justify-content-center row u__no_margin`}
      >
        <div className="col-xl-12 u__no_padding">
          <h1 className={`${styles.title} black_color_text`}>
            Pa' qué somos buenos
          </h1>
        </div>
        {/* <div className="col-xl-12 u__no_padding"> */}
        <div className="col-xl-12 u__no_padding">
          <CodeIcons big />
        </div>
        {/* <ItemService title="Tienda en línea" bgColor="#3a4da7">
          <AiFillShopping color="#181818" size={50} />
        </ItemService>
        <ItemService title="Android App" bgColor="#388e3c">
          <FaAndroid color="#181818" size={50} />
        </ItemService>
        <ItemService title="iOS App" bgColor="#181818">
          <FaApple color="#181818" size={50} />
        </ItemService> */}
      </div>
      {/* </div> */}
    </div>
  </div>
)

const ItemService = ({ title, children, bgColor }) => (
  <div className="col-xl-3  u__small_margin_bottom">
    <div
      //   style={{
      //     backgroundColor: bgColor,
      //   }}
      className={` ${styles.main_service} white_color`}
    >
      <div className="row u__no_margin">
        <div className="col-xl-12 u__no_padding">
          <div className={styles.children}>{children}</div>
        </div>
        <div className="col-xl-12 u__no_padd">
          <h1 className={`black_color_text ${styles.item_title}`}>{title}</h1>
        </div>
      </div>
    </div>
  </div>
)

export default OurProducts
