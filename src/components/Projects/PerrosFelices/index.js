import React from 'react';
import styles from './styles.module.css';
import projectStyles from '../style.module.css';
import { FaGooglePlay } from 'react-icons/fa';
import perrosFelicesImage from '../../../images/PerrosFelices.png';

const ProjectsPerrosFelices = ({}) => (
  <div className={`row u__no_margin justify-content-center align-items-center ${projectStyles.project_section}`}>
    <div className="col-11 col-lg-10 u__no_padding">
      <div className="row u__no_margin">
        <div className={`col-12 col-sm-5 order-last order-sm-first u__no_padding ${styles.perros_felices_image_container}`}>
          <img src={perrosFelicesImage} className={styles.perros_felices_image} alt="App Perros Felices" />
        </div>
        <div className="col-12 col-sm-7 u__no_padding align-items-center" style={{display: 'flex'}}>
          <div>
            <h3 className={`${styles.perros_felices_color} ${projectStyles.project_title}`}>
              <a href="https://perros-felices.web.app" target="_blank">
                Perros Felices
              </a>
            </h3>
            <p className={`${styles.perros_felices_color} ${projectStyles.project_phrase}`}>Adopta, ayuda y gana un amigo</p>
            <div className="separator" style={{backgroundColor: 'rgb(94, 46, 171)', margin: '1em 0'}} />
            <p className={`${styles.perros_felices_color} ${projectStyles.project_description}`}>Perros Felices facilita la tarea de conectar personas y albergues que tienen en adopción perros con personas que quieren un nuevo compañero.</p>
            <a
              className={`u__main_box_shadow ${projectStyles.project_button}`}
              style={{ backgroundColor: 'rgb(94, 46, 171)' }}
              href="https://play.google.com/store/apps/details?id=com.perrosfelices"
              target="_blank"
            >
              <FaGooglePlay size={20} color="currentColor" style={{ marginRight: '0.5em' }} /> DISPONIBLE EN GOOGLE PLAY
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsPerrosFelices;
