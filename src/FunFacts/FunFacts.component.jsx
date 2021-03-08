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
    <p className={css.header} data-aos="fade-in">
      Get a feel for who I am:
    </p>

    {/* FUN FACT LIST */}
    <ul className={css.factsList}>
      <li data-aos="fade-in">
        I enjoy looking at cutting edge web pages to figure out how they work
      </li>
      <li data-aos="fade-in">
        I can play the piano and guitar
      </li>
      <li data-aos="fade-in">
        I love coffee and am learning how to make latte art
      </li>
      <li data-aos="fade-in">
        I love the outdoors and exploring nature
      </li>
      <li data-aos="fade-in">
        My favorite game is World of Warcraft
      </li>
      <li data-aos="fade-in">
        I know how to produce electronic music
      </li>
      <li data-aos="fade-in">
        I love checking out innovative new technology and gadgets
      </li>
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
