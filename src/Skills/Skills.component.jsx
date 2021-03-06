import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import css from './Skills.module.scss';
import { columns, rows } from './gridData';
import SkillGrid from '../components/SkillGrid/SkillGrid.component';

const Skills = React.forwardRef((props, ref) => (
  <div
    id={props.pageId}
    className={classNames(props.className, css.skillsContainer)}
    ref={ref}
    data-aos="fade-in"
  >
    {/* HEADER */}
    <p className={css.header}>
      Some of my skills include:
    </p>

    {/* SKILLS GRID */}
    <SkillGrid
      columns={columns}
      rowData={rows}
    />

    {/* ATTRIBUTION */}
    <div className={css.attribution}>
      Icons made by
      <a href="https://www.freepik.com" title="Freepik">&nbsp;Freepik&nbsp;</a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">&nbsp;www.flaticon.com</a>
    </div>
  </div>
));

Skills.propTypes = {
  pageId: PropTypes.string,
  className: PropTypes.string,
};

Skills.defaultProps = {
  pageId: '',
  className: '',
};

export default Skills;
