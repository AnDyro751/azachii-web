import React from 'react';
import Layout from '../layouts/Main';
import Banner from '../components/Location/Banner';
import SEO from '../components/seo';

function Queretaro() {
  return (
    <Layout header={{ color: 'white' }}>
      <>
        <SEO
          title="Querétaro"
          description="Nuestro compromiso es escalar sus negocios e impulsar la creación de nuevas oportunidades"
        />
        <Banner
          cover={{
            desktop: 'https://agaccpiiqo.cloudimg.io/v7/https://azachii-develop.web.app/static/queretaro-df6c0dc0d7224c3d90d5aae208190f80.jpg?force_format=webp',
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
