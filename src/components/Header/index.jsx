import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import styles from "./style.module.css"
import { FaGift } from "react-icons/fa"
// console.log(styles, "SS")
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
      <div className="col-xl-10 u__no_padding ">
        <div className="row u__no_margin align-items-center">
          <div className="col-xl-auto u__no_padding">
            <h1 className="main_color_text u__no_margin">Azachii</h1>
          </div>
          <ItemHeader text="ACERCA DE" to="" />
          <ItemHeader text="SERVICIOS" to="" />
          <ItemHeader text="WEB GRATIS" featured to="" />
        </div>
      </div>
    </header>
  )
}
const ItemHeader = ({ text, to, featured = null }) => (
  <Link to="/">
    <div className="col-xl-auto">
      <h5 className="main_color_text u__no_margin">
        {text}&#160;&#160;
        {featured && <FaGift className="main_color_text" size={10} />}
      </h5>
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
