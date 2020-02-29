import React, { useEffect } from 'react';
import { useMixpanel } from 'gatsby-plugin-mixpanel';
import Layout from '../layouts/Main';
import SEO from '../components/seo';
import Banner from '../components/services/Banner';
import Insights from '../components/Insights';
import Design from '../components/Design';
import Strategy from '../components/Strategy';
import Development from '../components/Development';
import Step from '../components/services/Step';

const ServicesPage = () => {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track('services_page');
  }, [mixpanel]);

  return (
    <Layout>
      <>
        <SEO
          description="Azchii | Servicios y productos. Desarrollo web. Desarrollo Móvil. Producción multimedia."
          title="Servicios"
        />
        <Banner />
        <Step
          title="Siempre aportamos valor"
          text="Comenzamos haciendo preguntas estrategicas y haciendo una lluvia
          de ideas contigo. Después armamos un plan para llevar a cabo tu
          proyecto, ahorrando tiempo y dinero."
        />
        <Strategy />
        <Step
          image="design"
          left={false}
          title="Diseñado para personas"
          text="Cualquiera puede crear una aplicación. Nosotros hacemos
          más. Al diseñar pensando en los usuarios, contemplamos sus
          necesidades y construimos algo que amarán usar."
        />
        <Design />
        <Development />
        <Step
          image="work"
          title="Nuestro trabajo nunca termina"
          text="El lanzamiento del producto no es el final de la aventura.
          Nos encargamos de recopilar información y comportamiento de los
          usuarios para comprender que funciona y qué no. Así
          podemos seguir mejorando el producto."
        />
        <Insights />
      </>
    </Layout>
  );
};

export default ServicesPage;
