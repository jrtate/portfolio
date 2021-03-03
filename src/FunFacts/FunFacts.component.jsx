import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './FunFacts.module.scss';

const FunFacts = React.forwardRef((props, ref) => (
  <div
    id={props.pageId}
    className={classNames(props.className, css.funFactsContainer)}
    ref={ref}
  >
    {/* HEADER */}
    <p className={css.header} data-aos="fade-down">
      Get a feel for who I am:
    </p>

    <ul className={css.factsList}>
      <li data-aos="fade-right">I can sort of play the piano</li>
      <li data-aos="fade-left">
        I enjoy looking at cutting edge web pages
        <br />
        to figure out how it works
      </li>
      <li data-aos="fade-right">I&apos;ve almost learned how to juggle</li>
      <li data-aos="fade-left">My favorite comedian is Bill Burr.</li>
      <li data-aos="fade-right">I&apos;m learning how to make latte art.</li>
    </ul>

  </div>
));

FunFacts.propTypes = {
  pageId: PropTypes.string,
  className: PropTypes.string,
};

FunFacts.defaultProps = {
  pageId: '',
  className: '',
};

export default FunFacts;
