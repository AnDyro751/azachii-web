import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styles from "./style.module.css"
import { FaBars } from "react-icons/fa"
import classnames from "classnames"
import Sidebar from "./Sidebar"
import { IoMdClose } from "react-icons/io"
import { HamburgerElastic } from "react-animated-burgers"

const Header = ({ siteTitle, light = false }) => {
  const [scrollX, setScroll] = useState(0)
  const [white, setWhite] = useState(light)
  const [openSidebar, setOpenSidebar] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY)
      if (!light) {
        if (window.scrollY >= 20) {
          setWhite(true)
        } else {
          setWhite(false)
        }
      }
    })
  }, [])

  const getToContact = () => {
    let newScroll = 0
    let element = document.querySelector(".contact_form")
    if (element) {
      newScroll = element.getBoundingClientRect().y
      let height = 16 * 5
      window.scrollTo({
        top: newScroll - height,
        left: 0,
        bottom: 0,
        behavior: "smooth",
      })
    }
  }

  const headerClass = classnames({
    [styles.main_header]: true,
    [styles.header_box]: white,
    white_color: white,
  })

  const toggle = () => {
    setOpenSidebar(!openSidebar)
    document.documentElement.style.overflowY = "auto"
  }

  return (
    <>
      <header
        className={`${headerClass} title_font transparent_color row u__no_margin justify-content-center`}
      >
        <div className="col-11 col-xl-12 offset-xl-2 u__no_padding">
          <div className="row u__no_margin align-items-center justify-content-between justify-content-sm-start">
            <div className="col-xl-auto col-auto u__no_padding">
              <Link to="/">
                <h1 className="black_color_text u__no_margin">
                  Aza<span className="red_color_text">C</span>hii
                </h1>
              </Link>
            </div>
            <ItemHeader text="SERVICIOS" to="/" />
            <ItemHeader onContact={getToContact} text="CONTACTO" />
            <ItemHeader text="WEB GRATIS" featured={1} to="/free" />
            <HamburgerElastic
              buttonWidth={25}
              className="d-block d-sm-none u__no_outline"
              isActive={openSidebar}
              toggleButton={toggle}
            />
          </div>
        </div>
      </header>
      <Sidebar
        isOpen={openSidebar}
        moveToContact={() => {
          setOpenSidebar(false)
          document.documentElement.style.overflowY = "auto"
          getToContact()
        }}
      />
    </>
  )
}
const ItemHeader = ({ text, to = null, featured = 0, onContact }) =>
  to ? (
    <Link to={to}>
      <div className="col-xl-auto col-auto d-none d-sm-block u__pointer">
        <h5 className="black_color_text u__no_margin">{text}&#160;&#160;</h5>
      </div>
    </Link>
  ) : (
    <div
      onClick={onContact}
      className="col-xl-auto col-auto d-none d-sm-block u__pointer"
    >
      <h5 className="black_color_text u__no_margin">{text}&#160;&#160;</h5>
    </div>
  )

export default Header
