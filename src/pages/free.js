import React, { useEffect } from "react"
import Layout from "../components/layout"
import Header from "../components/Header/index"
import MainFreePage from "../components/Freepage/MainFreePage/index"
import { useMixpanel } from "gatsby-plugin-mixpanel"

const FreePage = () => {
  const mixpanel = useMixpanel()
  useEffect(() => {
    mixpanel.track("free_page")
  }, [])
  return (
    <Layout>
      <MainFreePage />
    </Layout>
  )
}

export default FreePage
