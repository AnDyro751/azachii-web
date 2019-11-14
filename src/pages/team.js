import React, {useEffect} from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"
import {useMixpanel} from "gatsby-plugin-mixpanel"

const TeamPage = () => {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("team_page")
  }, [mixpanel]);

  return (
    <Layout footer_color="blue_light_color" footer_text="white_color_text">
      <SEO title="Equipo" />
      <div className="row u__no_margin align-items-center justify-content-center" style={{height: '100vh'}}>
        <div className="col-11 u__no_padding">
          <div className="row u__no_margin justify-content-center">
            <div className="col-auto u__no_padding">
              <h1 className="team_page_title black_color_text main_font">
                Especialistas en soluciones digitales
              </h1>
              <div className="row u__no_margin justify-content-center">
                <div className="separator" style={{width: '80%'}} />
              </div>
              <p className="black_color_text team_page_message">
                Nuestros diseñadores e ingenieros saben que la colaboración es la base de todo proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row why_work_with_us justify-content-center">
        <div className="col-10 u__no_padding">
          <h2 className="team_page_section_title">¿Por qué trabajar con Azachii?</h2>
          <p className="team_page_section_message">
            No solo es la eficiencia de nuestro proceso y la calidad de nuestros productos. La dedicación de Azachii se ha encargado de entregar verdadero valor a los negocios. Te mostraremos que somos un verdadero socio para impulsar tu exito.
          </p>
        </div>
      </div>
      <div className="row why_work_with_us justify-content-center">
        <div className="col-10 u__no_padding">
          <h2 className="team_page_section_title">Nuestro enfoque</h2>
          <div className="row u__no_margin justify-content-between">
            <div className="col-md-5 col-12 u__no_padding">
              <p className="team_page_section_message">
                No importa sí eres una gran o pequeña empresa, podemos ayudarte a seguir adelante creando productos centrados en las personas.
              </p>
            </div>
            <div className="col-md-6 col-12 u__no_padding">
              <div className="row u__no_margin">
                <div className="col-4 team_page_section_item">
                  <div className="row u__no_margin justify-content-center align-items-center">
                    <p className="team_page_section_item_title">Diseño</p>
                  </div>
                </div>
                <div className="col-4 team_page_section_item">
                  <div className="row u__no_margin justify-content-center align-items-center">
                    <p className="team_page_section_item_title">Tecnología</p>
                  </div>
                </div>
                <div className="col-4 team_page_section_item">
                  <div className="row u__no_margin justify-content-center align-items-center">
                    <p className="team_page_section_item_title">Estrategía</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <style>{`
        .team_page_title {
          font-size: 4.5em;
          line-height: 1.5em;
          text-align: center;
        }
        .team_page_message {
          font-weight: normal;
          font-size: 2em;
          margin: 1em 0 !important;
        }
        .team_page_section_title {
          margin-top: 0;
          margin-bottom: 2.5em !important;
          font-size: 2.5em;
          text-align: center;
        }
        .team_page_section_message {
          margin: 0;
          font-size: 2em;
          text-align: left;
        }
        .why_work_with_us {
          margin-top: 0 !important;
          margin-bottom: 30vh !important;
        }
        .team_page_section_item {
          border: 1px solid rgba(0, 0, 0, 0.06);
          padding: 1.5em 0;
        }
        .team_page_section_item_title {
          margin: 0;
          font-weight: bold;
        }
        @media screen and (max-width: 1024px) {
          .team_page_message {
            font-size: 2em;
          }
          .team_page_section_message {
            font-size: 2em;
          }
          .why_work_with_us {
            margin-bottom: 15vh !important;
          }
        }
        @media screen and (max-width: 768px) {
          .team_page_title {
            font-size: 2.3em;
          }
          .team_page_message {
            font-size: 1.5em;
          }
          .team_page_section_title {
            font-size: 2em;
            margin-bottom: 2.5em !important;
          }
          .team_page_section_message {
            font-size: 1.4em;
          }
          .why_work_with_us {
            margin-bottom: 20vh !important;
          }
        }
        @media(max-width: 374px) {
          .team_page_title {
            font-size: 1.8em;
            margin-bottom: 2em !important;
          }
          .team_page_message {
            font-size: 1.3em;
          }
          .team_page_section_title {
            font-size: 1.5em;
            margin-bottom: 2em !important;
          }
          .team_page_section_message {
            font-size: 1.2em;
          }
        }
      `}</style>
    </Layout>
  );
};

export default TeamPage;
