import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './About.module.scss';
import profileImg from '../assets/profile_img.jpg';

const About = React.forwardRef((props, ref) => (
  <div
    id={props.pageId}
    className={classNames(props.className, css.aboutContainer)}
    ref={ref}
  >
    <div className={css.contentBackground} />
    <div className={css.aboutContent}>

      {/* PROFILE PICTURE */}
      <img
        className={css.profileImg}
        alt="profile_img"
        src={profileImg}
        data-aos="fade-right"
      />

      {/* DESCRIPTION */}
      <p className={css.about} data-aos="fade-left">
        I&apos;m a front-end developer from Tampa, Florida
        who has a passion for bringing ideas to life in the web.
        I love learning about new technologies and collaborating
        with others. I look forward to challenging problems and the
        satisfaction obtained from finding a good solution.
      </p>
    </div>

  </div>
));

About.propTypes = {
  className: PropTypes.string,
  pageId: PropTypes.string,
};

About.defaultProps = {
  className: '',
  pageId: '',
};

export default About;
