import React from "react"
import Layout from "../components/layout"
import MainHome from "../components/Home"
import SEO from "../components/seo"

const Index = () => (
  <Layout footer_color="blue_light_color" footer_text="white_color_text">
    <SEO
      description="Todo lo que necesitas para empezar con tu negocio online. Desarrollo web. Desarrollo móvil. Producción multimedia."
      title="Lleva tu negocio al mundo digital | Azachii"
    />
    <MainHome />
  </Layout>
)

export default Index
