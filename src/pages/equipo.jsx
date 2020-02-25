import React, { useEffect } from 'react';
import { useMixpanel } from 'gatsby-plugin-mixpanel';
import Layout from '../components/layout';
import Banner from '../components/Team/Banner';
import Reason from '../components/Team/Reason';
import SEO from '../components/seo';

function TeamPage() {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track('team_page');
  }, [mixpanel]);

  return (
    <Layout footer_color="blue_light_color" footer_text="white_color_text">
      <>
        <SEO
          description="Azachii | Nuestros diseñadores e ingenieros saben que la colaboración es la base de todo proyecto. Azachii es para ti."
          title="Equipo"
        />
        <Banner />
        <Reason
          title="¿Por qué trabajar con Azachii?"
          text="No solo es la eficiencia de nuestro proceso y la calidad de nuestros productos. La dedicación de Azachii se ha encargado de entregar verdadero valor a los negocios. Te mostraremos que somos un verdadero socio para impulsar tu exito."
        />
        <Reason
          title="Nuestro enfoque"
          text="No importa sí eres una gran o pequeña empresa, podemos ayudarte a seguir adelante creando productos centrados en las personas."
          leftCols="col-md-3 col-12"
          rightCols="col-md-8 col-12"
          items={[
            {
              title: 'Estrategía',
              items: [
                'Información del usuario',
              ],
            },
            {
              title: 'Diseño',
              items: [
                'Diseño de experiencia del usuario',
                'Diseño de interacción',
                'Diseño visual',
              ],
            },
            {
              title: 'Tecnología',
              items: [
                'React Native',
                'ReactJS',
                'Ruby on Rails',
                'NodeJS',
                'GraphQL',
                'Firebase',
                'Google Cloud',
              ],
            },
            {
              title: 'Percepción',
              items: [
                'Análisis y seguimiento de métricas',
                'Revisiones e informes',
                'Recomendaciones adicionales',
              ],
            },
          ]}
        />
      </>
    </Layout>
  );
}

export default TeamPage;
