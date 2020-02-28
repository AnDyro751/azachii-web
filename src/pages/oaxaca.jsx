import React from 'react';
import Layout from '../layouts/Main';
import Banner from '../components/Location/Banner';
import SEO from '../components/seo';
import coverDesktop from '../images/oaxaca.jpg';

function Oaxaca() {
  return (
    <Layout footer_color="blue_light_color" footer_text="white_color_text" header={{ color: 'white' }}>
      <>
        <SEO
          title="Oaxaca"
          description="Nuestro compromiso es escalar sus negocios e impulsar la creación de nuevas oportunidades"
        />
        <Banner
          cover={{
            desktop: coverDesktop,
            author: {
              name: 'Carlos Vasquez',
              instagram: 'https://www.instagram.com/cv_santiago/',
            },
          }}
          name="Oaxaca"
          message="Nuestro compromiso es escalar sus negocios e impulsar la creación de nuevas oportunidades"
          buttonText="IMPULSAME"
        />
      </>
    </Layout>
  );
}

export default Oaxaca;
