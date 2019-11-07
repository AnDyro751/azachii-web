import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import styles from "./style.module.css"
import { FaGift } from "react-icons/fa"
import classnames from "classnames"

const Header = ({ siteTitle }) => {
  const [scrollX, setScroll] = useState(0)
  const [white, setWhite] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setWhite(true)
      } else {
        setWhite(false)
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
      <div className="col-12 col-xl-12 offset-xl-2 u__no_padding">
        <div className="row u__no_margin align-items-center">
          <div className="col-xl-auto col-auto u__no_padding">
            <h1 className="black_color_text u__no_margin">Aza<span className="red_color_text" >C</span>hii</h1>
          </div>
          <ItemHeader text="SERVICIOS" to="" />
          <ItemHeader text="CONTACTO" to="" />
          <ItemHeader text="WEB GRATIS" to="" />
        </div>
      </div>
    </header>
  )
}
const ItemHeader = ({ text, to, featured = null }) => (
  <Link to="/">
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
