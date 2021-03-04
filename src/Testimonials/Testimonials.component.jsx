import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import colleague1 from '../assets/colleague_1.jpg';

import css from './Testimonials.module.scss';

const Testimonials = React.forwardRef((props, ref) => (
  <div
    id={props.pageId}
    className={classNames(props.className, css.testimonialsContainer)}
    ref={ref}
  >
    {/* HEADER */}
    <p className={css.header} data-aos="fade-down">
      I&apos;ve had the opportunity to work with some wonderful people
      and here&apos;s what one of them had to say:
    </p>

    <div className={css.testimonialContent}>
      <div className={css.contentBackground} />

      {/* COLLEAGUE PROFILE */}
      <div className={css.colleagueContainer} data-aos="fade-right">
        <img className={css.profileImg} alt="profile_img" src={colleague1} />
        <strong>John Helms</strong>
        Senior Product Manager
        <br />
        ConnectWise
      </div>

      {/* TESTIMONIAL */}
      <p className={css.quote} data-aos="fade-left">
        &quot;For the 3 years, I watched Justin grow as a developer. He quickly established
        that he was eager to learn whatever it took to get the job done. Within his first year
        he found his calling, Justin became one of our go-to developers for our web project.
        He was an invaluable resource to the entire team. Several developers began asking for
        his advice on their projects, and he was always willing to help. His attitude and work
        ethics made working with him an absolute pleasure. I would love to have the opportunity
        to work with him again in the future.  Either way, I know that he will an asset
        to any company he joins.&quot;
      </p>
    </div>

  </div>
));

Testimonials.propTypes = {
  pageId: PropTypes.string,
  className: PropTypes.string,
};

Testimonials.defaultProps = {
  pageId: '',
  className: '',
};

export default Testimonials;
