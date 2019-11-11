import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"
import { useMixpanel } from "gatsby-plugin-mixpanel"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import CollaborationTeam from "../components/CollaborationTeam"

const ServicesPage = () => {
  const mixpanel = useMixpanel()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "services/background.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  useEffect(() => {
    mixpanel.track("services_page")
  }, [])

  return (
    <Layout footer_color="blue_light_color" footer_text="white_color_text">
      <>
        <SEO title="Servicios" />
        <BackgroundImage
          style={{
            backgroundSize: "70%",
          }}
          // className={styles.bg}
          fluid={data.placeholderImage.childImageSharp.fluid}
        >
          <CollaborationTeam />
          <div className="row u__no_margin justify-content-center service_step">
            <div className="col-11 col-lg-10 u__no_padding">
              <div className="row u__no_margin">
                <div className="col-md-6 u__no_padding">
                  <div className="row u__no_margin">
                    <div className="col-md-11 u__no_padding">
                      <h2 className="service_step_title">
                        Siempre aportamos valor
                      </h2>
                      <p className="service_step_description">
                        Comenzamos haciendo preguntas estrategicas y haciendo
                        una lluvia de ideas contigo. Despues armamos un plan
                        para llevar a cabo tu proyecto, ahorrando tiempo y
                        dinero.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 u__no_padding"></div>
              </div>
            </div>
          </div>
        </BackgroundImage>

        <div className="row u__no_margin justify-content-center service_step service_step_grey">
          <div className="col-11 col-lg-10 u__no_padding">
            <div className="row u__no_margin">
              <div className="col-md-6 u__no_padding"></div>
              <div className="col-md-6 u__no_padding">
                <div className="row u__no_margin justify-content-end">
                  <div className="col-md-11 u__no_padding">
                    <h2 className="service_step_title">
                      Diseñado para personas
                    </h2>
                    <p className="service_step_description">
                      Cualquiera puede crear una aplicación. Nosotros hacemos
                      más. Al diseñar pensando en los usuarios, contemplamos sus
                      necesidades y construimos algo que amarán usar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row u__no_margin justify-content-center service_step">
          <div className="col-11 col-lg-10 u__no_padding">
            <div className="row u__no_margin">
              <div className="col-md-6 u__no_padding">
                <div className="row u__no_margin">
                  <div className="col-md-11 u__no_padding">
                    <h2 className="service_step_title">
                      Nuestro trabajo nunca termina
                    </h2>
                    <p className="service_step_description">
                      El lanzamiento del producto no es el fin de la aventura.
                      Recopilamos la información y comportamiento de los
                      usuarios para comprender que funciona y que no. Así
                      podemos seguir mejorando el producto.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 u__no_padding"></div>
            </div>
          </div>
        </div>
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
            font-size: 2em;
          }
          @media screen and (max-width: 1024px) {
            .service_page_title {
              font-size: 2em;
            }
            .service_step_title {
              font-size: 1.7em;
              margin-bottom: 1.2em !important;
            }
            .service_step_description {
              font-size: 1.3em;
            }
          }
        `}</style>
      </>
    </Layout>
  )
}

export default ServicesPage
