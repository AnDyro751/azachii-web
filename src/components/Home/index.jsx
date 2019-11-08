import React, { useEffect } from "react"
import Header from "../Header"
import MainBanner from "./MainBanner/index"
import HelpYou from "../HelpYou/index"
import WebPage from "../WebPage/index"
// import ReactGA from "react-ga"
const MainHome = () => {
  useEffect(() => {
    // ReactGA.initialize("214504656")
    // ReactGA.pageview("/aqui_el_path")
  }, [])
  return (
    <div>
      <Header />
      <MainBanner />
      <HelpYou />
      <WebPage />
    </div>
  )
}
export default MainHome
