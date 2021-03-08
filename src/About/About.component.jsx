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
    data-aos="fade-in"
  >
    <div className={css.aboutContent}>

      {/* PROFILE PICTURE */}
      <img
        className={css.profileImg}
        alt="profile_img"
        src={profileImg}
      />

      {/* DESCRIPTION */}
      <p className={css.about}>
        I&apos;m a front-end developer from Tampa, Florida who has a passion for
        bringing ideas to life in the web. I’ve had the opportunity to work at a
        multibillion-dollar company that empowered technology service providers through
        the innovative tools they provided. Some of my experience stems from working
        on remote monitoring and management software, deployed to over 6 million
        computers across the globe. This presented a unique set of challenges which
        has only encouraged my growth as a web developer. I consider myself naturally
        motivated, congenial in nature, and am always looking for opportunities to
        improve myself.
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
