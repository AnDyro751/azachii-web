import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import styles from "./style.module.css"
import { FaGift } from "react-icons/fa"
import classnames from "classnames"
import HeadShake from "react-reveal/HeadShake"

const Header = ({ siteTitle, light = false }) => {
  const [scrollX, setScroll] = useState(0)
  const [white, setWhite] = useState(light)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!light) {
        if (window.scrollY >= 40) {
          setWhite(true)
        } else {
          setWhite(false)
        }
      }
    })
  }, [])

  const headerClass = classnames({
    [styles.main_header]: true,
    [styles.header_box]: white,
    white_color: white,
  })

  return (
    <header
      className={`${headerClass} title_font transparent_color row u__no_margin justify-content-center`}
    >
      <div className="col-11 col-xl-12 offset-xl-2 u__no_padding">
        <div className="row u__no_margin align-items-center">
          <div className="col-xl-auto col-auto u__no_padding">
            <Link to="/">
              <h1 className="black_color_text u__no_margin">
                Aza<span className="red_color_text">C</span>hii
              </h1>
            </Link>
          </div>
          <ItemHeader text="SERVICIOS" to="/" />
          <ItemHeader text="CONTACTO" to="/" />
          <ItemHeader text="WEB GRATIS" featured={1} to="/free" />
        </div>
      </div>
    </header>
  )
}
const ItemHeader = ({ text, to, featured = 0 }) => (
  <Link to={to}>
    <div className="col-xl-auto col-auto d-none d-sm-block">
      <h5 className="black_color_text u__no_margin">{text}&#160;&#160;</h5>
    </div>
  </Link>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
