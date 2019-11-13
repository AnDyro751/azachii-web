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
      <Contact />
    </Layout>
  );
};

export default TeamPage;
