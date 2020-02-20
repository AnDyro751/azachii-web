import React from 'react';
import Layout from '../components/layout';
import Banner from '../components/Location/Banner';
import SEO from '../components/seo';

function Queretaro() {
  return (
    <Layout footer_color="blue_light_color" footer_text="white_color_text" header={{ color: 'white' }}>
      <>
        <SEO title="Querétaro" />
      </>
    </Layout>
  );
}

export default Queretaro;
