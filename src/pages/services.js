import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"
import { useMixpanel } from "gatsby-plugin-mixpanel"
import CollaborationTeam from "../components/CollaborationTeam"
import Value from "../components/Value/index"
import OurProducts from "../components/OurProducts/index"
import OurServices from "../components/OurServices/index"

const ServicesPage = () => {
  const mixpanel = useMixpanel();
  
  useEffect(() => {
    mixpanel.track("services_page")
  }, [mixpanel])

  return (
    <Layout footer_color="blue_light_color" footer_text="white_color_text">
      <>
        <SEO title="Servicios" />
        <CollaborationTeam />
        <OurProducts />
        <OurServices />
        <Value
          title="Siempre aportamos valor"
          text="Comenzamos haciendo preguntas estrategicas y haciendo una lluvia
          de ideas contigo. Después armamos un plan para llevar a cabo tu
          proyecto, ahorrando tiempo y dinero."
        />
        <Value
          image="design"
          left={false}
          title="Diseñado para personas"
          text="Cualquiera puede crear una aplicación. Nosotros hacemos
          más. Al diseñar pensando en los usuarios, contemplamos sus
          necesidades y construimos algo que amarán usar."
        />
        <Value
          image="work"
          title="Nuestro trabajo nunca termina"
          text="El lanzamiento del producto no es el final de la aventura.
          Nos encargamos de recopilar información y comportamiento de los
          usuarios para comprender que funciona y qué no. Así
          podemos seguir mejorando el producto."
        />
        <Contact />
        <style>{`
          .service_step_grey {
            background-color: rgb(251, 250, 249) !important;
          }
          .service_step {
            padding: 3em 0;
          }
          .service_step_title {
            font-size: 2.5em;
            line-height: 1.2em;
            margin-bottom: 1.5em !important;
          }
          .service_step_description {
            font-size: 1.2em;
          }
          @media screen and (max-width: 1024px) {
            .service_page_title {
              font-size: 2em;
            }
            .service_step_title {
              font-size: 1.3em;
              margin-bottom: 1.2em !important;
            }
            .service_step_description {
              font-size: 1em;
            }
          }
          @media screen and (max-width: 768px) {
            .service_step{
              padding: 1em 0 !important;
            }
          }
        `}</style>
      </>
    </Layout>
  )
}

export default ServicesPage
