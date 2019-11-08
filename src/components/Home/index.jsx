import React, { useEffect } from "react"
import Header from "../Header"
import MainBanner from "./MainBanner/index"
import HelpYou from "../HelpYou/index"
import WebPage from "../WebPage/index"
import { useMixpanel } from "gatsby-plugin-mixpanel"
import SimplePayments from '../SimplePayments/index';
import GetFreePage from '../GetFreePage/index';
import Contact from '../Contact/index';

const MainHome = () => {
  const mixpanel = useMixpanel()
  useEffect(() => {
    mixpanel.track("home_page")
  }, [])
  return (
    <div>
      <Header />
      <MainBanner />
      <HelpYou />
      <WebPage />
      <SimplePayments />
      <GetFreePage />
      <Contact />
    </div>
  )
}
export default MainHome
