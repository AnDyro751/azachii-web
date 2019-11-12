import MainPricing from "../components/MainPricing/index"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from '../components/Contact/index';

const Pricing = () => (
  <Layout footer_color="blue_light_color" footer_text="white_color_text">
    <SEO title="Precios" />
    <MainPricing />
    <Contact />
  </Layout>
)
export default Pricing
