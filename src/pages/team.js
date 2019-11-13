import React, {useEffect} from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"
import {useMixpanel} from "gatsby-plugin-mixpanel"

const TeamPage = () => {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("team_page")
  }, []);

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
      <div className="row u__no_margin justify-content-center">
        <div className="col-11 u__no_padding">
          <h2 className="team_page_section_title">¿Por qué trabajar con Azachii?</h2>
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
          margin-bottom: 1em;
          font-size: 2.5em;
          text-align: center;
        }
        @media screen and (max-width: 1024px) {
          .team_page_message {
            font-size: 2em;
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
          }
        }
        @media(max-width: 375px) {
          .team_page_title {
            font-size: 1.8em;
          }
          .team_page_message {
            font-size: 1.3em;
          }
          .team_page_section_title {
            font-size: 1.5em;
          }
        }
      `}</style>
    </Layout>
  );
};

export default TeamPage;
