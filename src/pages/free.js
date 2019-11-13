import React, { useEffect } from "react"
import Layout from "../components/layout"
import MainFreePage from "../components/Freepage/MainFreePage/index"
import { useMixpanel } from "gatsby-plugin-mixpanel"
import How from "../components/How/index"
import Contact from "../components/Contact/index"
import WebPage from "../components/WebPage/index"
import GetFreePage from "../components/GetFreePage/index"
import SEO from '../components/seo';
import Tools from '../components/Tools/index';

const FreePage = () => {
  const mixpanel = useMixpanel()

  useEffect(() => {
    mixpanel.track("free_page")
  }, [])
  return (
    <Layout footer_color="blue_light_color" footer_text="white_color_text">
      <SEO title="Página web gratis" />

      <MainFreePage />
      <How />
      <WebPage />
      <Tools />
      {/* <Promo /> */}
      <GetFreePage />
      <Contact />
    </Layout>
  )
}

export default FreePage
