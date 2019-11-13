import React, { useEffect } from "react"
import MainBanner from "./MainBanner/index"
import HelpYou from "../HelpYou/index"
import WebPage from "../WebPage/index"
import { useMixpanel } from "gatsby-plugin-mixpanel"
import SimplePayments from "../SimplePayments/index"
import GetFreePage from "../GetFreePage/index"
import Contact from "../Contact/index"
import Tools from "../Tools/index"
const MainHome = () => {
  const mixpanel = useMixpanel()

  useEffect(() => {
    mixpanel.track("home_page")
  }, [])

  return (
    <div>
      <MainBanner />
      <HelpYou />
      <WebPage />
      <Tools />
      <SimplePayments />
      <GetFreePage />
      <Contact />
    </div>
  )
}
export default MainHome
