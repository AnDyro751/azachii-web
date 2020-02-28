import React, { useContext } from 'react';
import classnames from 'classnames';
import ThemeContext from '../../contexts/Theme';
import styles from './style.module.css';

function DiscussYourProject() {
  const { dark } = useContext(ThemeContext);

  function goToContact() {
    const YPosition = document.getElementsByClassName('contact_form')[0].getBoundingClientRect().y + document.getElementsByClassName('contact_form')[0].getBoundingClientRect().top;
    window.scrollTo(0, YPosition);
  }

  const mainClass = classnames({
    'row u__no_margin justify-content-center': true,
    [styles.discuss_project]: true,
    secondary_white_color: !dark,
    secondary_black_color: dark,
  });
  const titleClass = classnames({
    [styles.discuss_message]: true,
    black_color_text: !dark,
    white_color_text: dark,
  });
  const buttonClass = classnames({
    'col-12 col-sm-6 col-md-4 col-lg-3': true,
    [styles.lets_talk]: true,
    red_color: dark,
    blue_light_color: !dark,
  });

  return (
    <div className={mainClass}>
      <div className="col-11 col-lg-10 u__no_padding">
        <h2 className={titleClass}>
          ¿Listo para hablar de tu proyecto?
        </h2>
        <div className="row u__no_margin justify-content-center">
          <button
            type="button"
            className={buttonClass}
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
