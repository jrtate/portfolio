import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './Intro.module.scss';

const Intro = React.forwardRef((props, ref) => {
  const handleScrollClick = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id={props.pageId}
      className={classNames(props.className, css.introContainer)}
      ref={ref}
    >
      {/* GREETINGS */}
      <div className={css.greetingsContainer} data-aos="fade-down">
        Well...
        <span className={css.hello}>&nbsp;hello&nbsp;</span>
        there!
      </div>

      {/* NAME CONTAINER */}
      <div className={css.nameContainer} data-aos="fade-up" data-aos-delay="1500">

        {/* NAME */}
        <p>
          My name is
          <strong>&nbsp;Justin Tate</strong>
          , but you can call me:
        </p>

        {/* NICKNAMES */}
        <ul className={css.nameList}>
          <li>Justin</li>
          <li>Tate</li>
          <li>Tater</li>
          <li>Tater-tot</li>
          <li>Mr. Tate</li>
          <li>Po-tate-rs</li>
        </ul>
        <div className={css.underline}>
          Or any nickname you wish!
        </div>
      </div>

      {/* SCROLL ANIMATION */}
      <div
        className={css.scrollDown}
        onClick={() => {
          handleScrollClick();
        }}
      >
        <div className={css.line} />
      </div>

    </div>
  );
});

Intro.propTypes = {
  pageId: PropTypes.string,
  className: PropTypes.string,
};

Intro.defaultProps = {
  pageId: '',
  className: '',
};

export default Intro;
