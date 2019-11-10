import React, { useEffect } from "react"
import Layout from "../components/layout"
import MainFreePage from "../components/Freepage/MainFreePage/index"
import { useMixpanel } from "gatsby-plugin-mixpanel"
import How from "../components/How/index"

const FreePage = () => {
  const mixpanel = useMixpanel()
  useEffect(() => {
    mixpanel.track("free_page")
  }, [])
  return (
    <Layout>
      <MainFreePage />
      <How />
    </Layout>
  )
}

export default FreePage
