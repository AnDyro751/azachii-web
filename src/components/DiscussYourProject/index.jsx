import React from 'react';
import styles from './style.module.css';

function DiscussYourProject() {
  function goToContact() {
    const YPosition = document.getElementsByClassName('contact_form')[0].getBoundingClientRect().y + document.getElementsByClassName('contact_form')[0].getBoundingClientRect().top;
    window.scrollTo(0, YPosition);
  }

  return (
    <div className={`row u__no_margin ${styles.discuss_project} justify-content-center`}>
      <div className="col-11 col-lg-10 u__no_padding">
        <h2 className={styles.discuss_message}>
          ¿Listo para hablar de tu proyecto?
        </h2>
        <div className="row u__no_margin justify-content-center">
          <button
            type="button"
            className={`col-12 col-sm-6 col-md-4 col-lg-3 ${styles.lets_talk}`}
            onClick={goToContact}
          >
            HABLEMOS
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiscussYourProject;
