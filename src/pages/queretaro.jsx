import React from 'react';
import Layout from '../components/layout';
import Banner from '../components/Location/Banner';
import SEO from '../components/seo';
import coverDesktop from '../images/queretaro.jpg';

function Queretaro() {
  return (
    <Layout footer_color="blue_light_color" footer_text="white_color_text" header={{ color: 'white' }}>
      <>
        <SEO
          title="Querétaro"
          description="Nuestro compromiso es escalar sus negocios e impulsar la creación de nuevas oportunidades"
        />
        <Banner
          cover={{
            desktop: coverDesktop,
          }}
          name="Querétaro"
          message="Nuestro compromiso es escalar sus negocios e impulsar la creación de nuevas oportunidades"
          buttonText="IMPULSAME"
        />
      </>
    </Layout>
  );
}

export default Queretaro;
