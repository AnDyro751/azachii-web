import React from 'react';
import Layout from '../components/layout';
import Banner from '../components/Location/Banner';
import SEO from '../components/seo';
import coverDesktop from '../images/oaxaca.jpg';

function Oaxaca() {
  return (
    <Layout footer_color="blue_light_color" footer_text="white_color_text" header={{ color: 'white' }}>
      <>
        <SEO title="Oaxaca" />
        <Banner cover={{ desktop: coverDesktop }} name="Oaxaca" />
      </>
    </Layout>
  );
}

export default Oaxaca;
