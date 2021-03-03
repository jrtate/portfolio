import React from 'react';
import PropTypes from 'prop-types';
import { findPercent } from '../../utils/misc';
import css from './SkillGrid.module.scss';
import levelOne from '../../assets/smart.png';
import levelTwo from '../../assets/smarterer.png';
import levelThree from '../../assets/smarterest.png';

const Grid = (props) => {
  const renderCell = (row, column) => {
    if (column.id === 1) {
      return <div>{row.name}</div>;
    }
    if (column.id === 2 && row.confidenceScale >= 1) {
      return <img src={levelOne} alt="first" className={css.scaleImg} />;
    }
    if (column.id === 3 && row.confidenceScale >= 2) {
      return <img src={levelTwo} alt="second" className={css.scaleImg} />;
    }
    if (column.id === 4 && row.confidenceScale >= 3) {
      return <img src={levelThree} alt="third" className={css.scaleImg} />;
    }

    return null;
  };

  return (
    <div className={css.gridContainer}>

      {/* COLUMN HEADER */}
      <div className={css.columns}>
        {props.columns.map((column) => (
          <div
            key={column.id}
            className={css.columnHeader}
            style={{ width: findPercent(1, props.columns.length) }}
          >
            {column.columnHeader}
          </div>
        ))}
      </div>

      {/* ROW DATA */}
      {props.rowData.map((row) => (
        <div key={row.id} className={css.row}>
          {(props.columns.map((column) => (
            <div
              key={column.id}
              className={css.cell}
              style={{
                width: findPercent(1, props.columns.length),
              }}
            >
              {renderCell(row, column)}
            </div>
          )))}
        </div>
      ))}

    </div>
  );
};

const rowShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  confidenceScale: PropTypes.number.isRequired, // 1-3
});

Grid.propTypes = {
  columns: PropTypes.array.isRequired,
  rowData: PropTypes.arrayOf(rowShape).isRequired,
};

export default Grid;
