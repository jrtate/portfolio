import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import emailjs from 'emailjs-com';
import linkedInImg from '../assets/linked_in_logo.png';
import gitHubImg from '../assets/github_logo.png';
import emailImg from '../assets/email_logo.png';
import css from './Connect.module.scss';

const Connect = React.forwardRef((props, ref) => {
  const handleSendEmail = (form) => {
    form.preventDefault();
    emailjs.sendForm('service_3xatulc', 'template_zcd271h', form.target, 'user_eFrAzOzPBfN4En1gJ0GJk')
      .then(() => {
        window.location.reload();
      }, () => {
        // TODO
      });
  };

  return (
    <div
      id={props.pageId}
      className={classNames(props.className, css.connectContainer)}
      ref={ref}
    >
      {/* HEADER */}
      <p className={css.header} data-aos="fade-down">
        Let&apos;s chat!
      </p>

      {/* EMAIL FORM */}
      <form className={css.form} onSubmit={handleSendEmail} data-aos="fade-up">

        {/* EMAIL FIELD */}
        <div className={css.fieldContainer}>
          <input type="text" name="visitor_email" required />
          <label htmlFor="visitor_email" className={css.fieldLabel}>
            <span className={css.fieldLabelText}>Email</span>
          </label>
        </div>

        {/* NAME FIELD */}
        <div className={css.fieldContainer}>
          <input type="text" name="visitor_name" required />
          <label htmlFor="visitor_name" className={css.fieldLabel}>
            <span className={css.fieldLabelText}>Name</span>
          </label>
        </div>

        {/* MESSAGE */}
        <div className={css.messageContainer}>
          <textarea type="text" name="message" required />
          <label htmlFor="message" className={css.messageLabel}>
            <span className={css.messageLabelText}>Message</span>
          </label>
        </div>

        {/* FORM BUTTONS */}
        <div className={css.formButtons}>
          {/* CLEAR FORM */}
          <input
            type="reset"
            value="Clear"
            className={css.button}
          />

          {/* SEND EMAIL */}
          <input
            type="submit"
            value="Send"
            className={css.button}
          />
        </div>

      </form>

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

          {/* JUST IN CASE THEY'D RATHER EMAIL ME ANOHTER WAY */}
          <a href="mailto: jrtate1994@gmail.com">
            <img
              src={emailImg}
              alt="email"
            />
          </a>

        </div>

        <p>Forged by me, with love</p>
      </div>
    </div>
  );
});

Connect.propTypes = {
  pageId: PropTypes.string,
  className: PropTypes.string,
};

Connect.defaultProps = {
  pageId: '',
  className: '',
};

export default Connect;
