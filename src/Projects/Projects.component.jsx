import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './Projects.module.scss';
import reDashboard from '../assets/r_e_dashboard.png';

const Projects = React.forwardRef((props, ref) => (
  <div
    id={props.pageId}
    className={classNames(props.className, css.projectContainer)}
    ref={ref}
  >
    {/* HEADER */}
    <div className={css.header} data-aos="fade-down">Here&apos;s some projects I did for fun:</div>

    {/* PROJECTS */}
    <div className={css.projectContent} data-aos="fade-up">
      <p className={css.projectHeader}>Real Estate Management Dashboard</p>
      <img src={reDashboard} alt="real_estate_dashboard" className={css.dashboardImg} />
      <p>
        A project where I wanted to see how web APIs were
        created and hooked up to a front end from scratch.
      </p>
    </div>

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
