import React from 'react';
import projectStyles from '../style.module.css';
import styles from './style.module.css';
import mecImage from '../../../images/Mec.png';

function MecProjects() {
  return (
    <div className={`row u__no_margin justify-content-center align-items-center ${projectStyles.project_section}`}>
      <div className="col-11 col-lg-10 u__no_padding">
        <div className="row u__no_margin">
          <div className="col-12 col-sm-6 u__no_padding align-items-center" style={{display: 'flex'}}>
            <div>
              <h3 className={projectStyles.project_title}>
                <a href="https://mec-joyeria.web.app" target="_blank" className={styles.mec_color}>
                  MEC JOYERÍA
                </a>
              </h3>
              <p className={`${styles.mec_color} ${projectStyles.project_phrase}`}>En cada uno de sus diseños comparten un pedazo de su corazón</p>
              <div className="separator" style={{backgroundColor: '#181818', margin: '1em 0'}} />
              <p className={`${styles.mec_color} ${projectStyles.project_description}`}>MEC Joyería es una marca 100% mexicana y artesanal que busca crear piezas únicas y hermosas que puedes usar en cualquier ocasión.</p>
              <a
                className={`u__main_box_shadow ${projectStyles.project_button}`}
                style={{ backgroundColor: '#181818' }}
                href="https://mec-joyeria.web.app"
                target="_blank"
              >
                VISITAR
              </a>
            </div>
          </div>
          <div className={`col-12 col-sm-6 u__no_padding ${styles.mec_image_container}`}>
            <img src={mecImage} className={styles.mec_image} alt="Web MEC Joyería" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MecProjects;
