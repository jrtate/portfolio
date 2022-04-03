import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './SlideShow.module.scss';

const SlideShow = (props) => {
  const [selectedSlideId, setSelectedSlideId] = useState(1);

  const handleNavigationButtonClick = (slideId) => {
    setSelectedSlideId(slideId);
  };

  return (
    <div className={css.slideShowContainer} data-aos="fade-up">
      {/* Slide Navigator */}
      <div className={css.navigatorContainer}>
        {props.slides.map((slide) => (
          <div
            key={slide.id}
            className={cx(
              css.navigatorButton,
              { [css.selectedNavigatorButton]: slide.id === selectedSlideId },
            )}
            onClick={() => { handleNavigationButtonClick(slide.id); }}
          />
        ))}
      </div>

      {props.slides.map((slide) => (
        selectedSlideId === slide.id && (
          <div
            className={css.slideContent}
            key={slide.id}
          >
            {/* HEADER */}
            <p className={css.slideHeader}>
              {slide.slideHeader}
            </p>

            {/* SLIDE IMAGE */}
            <img
              src={slide.imgSrc}
              alt="real_estate_dashboard"
              className={css.slideImg}
            />

            {/* SLIDE DESCRIPTION */}
            <div className={css.slideDescription}>
              {slide.slideDescription}
            </div>

          </div>
        )
      ))}
    </div>
  );
};

const slideShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  slideHeader: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  slideDescription: PropTypes.any.isRequired,
});

SlideShow.propTypes = {
  slides: PropTypes.arrayOf(slideShape).isRequired,
};

export default SlideShow;
