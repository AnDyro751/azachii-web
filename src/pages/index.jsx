import React, { useEffect } from 'react';
import { useMixpanel } from 'gatsby-plugin-mixpanel';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/Home/Banner';
import HelpYou from '../components/HelpYou';
import Project from '../components/Project';
import Tools from '../components/Tools';
import SimplePayments from '../components/SimplePayments';
import perrosFelices from '../images/PerrosFelices.png';
import mecJoyeria from '../images/Mec.png';
import styles from '../css/index.module.css';

function Index() {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track('home_page');
  }, []);

  return (
    <Layout footer_color="blue_light_color" footer_text="white_color_text">
      <>
        <SEO
          description="Todo lo que necesitas para empezar con tu negocio online. Desarrollo web. Desarrollo móvil. Producción multimedia."
          title="Lleva tu negocio al mundo digital | Azachii"
        />
        <Banner />
        <HelpYou />
        <Project
          name="MEC JOYERÍA"
          brief="En cada uno de sus diseños comparten un pedazo de su corazón"
          description="MEC Joyería es una marca 100% mexicana y artesanal que busca crear piezas únicas y hermosas que puedes usar en cualquier ocasión."
          web="https://mec-joyeria.web.app"
          image={{
            alt: 'Web MEC Joyería',
            src: mecJoyeria,
            justify: 'flex-start',
            align: 'center',
            className: styles.mec_joyeria_image,
          }}
          color="#181818"
        />
        <SimplePayments />
        <Project
          name="Perros Felices"
          brief="Adopta, ayuda y gana un amigo"
          description="Perros Felices facilita la tarea de conectar personas y albergues que tienen en adopción perros con personas que quieren un nuevo compañero."
          web="https://perros-felices.web.app"
          image={{
            alt: 'App Perros Felices',
            src: perrosFelices,
            justify: 'flex-end',
            align: 'flex-end',
            className: styles.perros_felices_image,
          }}
          color="rgb(94, 46, 171)"
          inverted
        />
        <Tools />
      </>
    </Layout>
  );
}

export default Index;
