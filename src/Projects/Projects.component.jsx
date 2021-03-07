import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SlideShow from '../components/SlideShow/SlideShow.component';
import css from './Projects.module.scss';
import slideData from './Projects.constants';

const Projects = React.forwardRef((props, ref) => (
  <div
    id={props.pageId}
    className={classNames(props.className, css.projectContainer)}
    ref={ref}
  >
    {/* HEADER */}
    <div
      className={css.header}
      data-aos="fade-down"
    >
      Here&apos;s a couple projects I did for fun:
    </div>

    {/* PROJECTS */}
    <SlideShow slides={slideData} />

  </div>
));

Projects.propTypes = {
  pageId: PropTypes.string,
  className: PropTypes.string,
};

Projects.defaultProps = {
  pageId: '',
  className: '',
};

export default Projects;
