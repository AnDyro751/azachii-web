import React, { useEffect } from "react"
import Layout from "../components/layout"
import MainFreePage from "../components/Freepage/MainFreePage/index"
import { useMixpanel } from "gatsby-plugin-mixpanel"
import How from "../components/How/index"
import Contact from "../components/Contact/index"
import HelpYou from '../components/HelpYou/index';
import WebPage from '../components/WebPage/index';

const FreePage = () => {
  const mixpanel = useMixpanel()
  useEffect(() => {
    mixpanel.track("free_page")
  }, [])
  return (
    <Layout>
      <MainFreePage />
      <How />
      <WebPage />

      <Contact />
    </Layout>
  )
}

export default FreePage
