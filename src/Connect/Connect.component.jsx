import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import linkedInImg from '../assets/linked_in_logo.png';
import gitHubImg from '../assets/github_logo.png';
import emailImg from '../assets/email_logo.png';
import css from './Connect.module.scss';

const Connect = React.forwardRef((props, ref) => (
  <div
    id={props.pageId}
    className={classNames(props.className, css.connectContainer)}
    ref={ref}
  >
    {/* HEADER */}
    <p className={css.header} data-aos="fade-in">
      Let&apos;s chat!
    </p>

    {/* JUST IN CASE THEY'D RATHER EMAIL ME ANOHTER WAY */}
    <a href="mailto: jrtate1994@gmail.com">
      <img
        src={emailImg}
        alt="email"
      />
    </a>

    {/* FOOTER */}
    <div className={css.footerContainer}>

      {/* LINKED IN LINK */}
      <div>
        <img
          src={linkedInImg}
          alt="linked_in"
          onClick={() => {
            window.open('https://www.linkedin.com/in/justin-tate-68a516119/');
          }}
        />

        {/* GITHUB LINK */}
        <img
          src={gitHubImg}
          alt="github"
          onClick={() => {
            window.open('https://github.com/jrtate');
          }}
        />

      </div>

      <p>Forged by me, with love</p>
    </div>
  </div>
));

Connect.propTypes = {
  pageId: PropTypes.string,
  className: PropTypes.string,
};

Connect.defaultProps = {
  pageId: '',
  className: '',
};

export default Connect;
