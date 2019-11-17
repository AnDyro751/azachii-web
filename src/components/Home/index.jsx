import React, { useEffect } from "react"
import MainBanner from "./MainBanner/index"
import HelpYou from "../HelpYou/index"
import WebPage from "../WebPage/index"
import { useMixpanel } from "gatsby-plugin-mixpanel"
import SimplePayments from "../SimplePayments/index"
import GetFreePage from "../GetFreePage/index"
import Contact from "../Contact/index"
import Tools from "../Tools/index"
import MainGetter from '../MainGetter/index';
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
      <MainGetter 
      title="Producción multimedia"
      description="Producción multimedia para tu negocio o marca personal"
      contain="multimedia"
      tracker="get_multimedia"
      button_text="Solicitar presupuesto"
      />
      <Tools />
      <SimplePayments />
      <GetFreePage />
      <Contact />
    </div>
  )
}
export default MainHome
