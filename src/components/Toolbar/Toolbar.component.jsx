import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Toolbar.module.scss';

const Toolbar = (props) => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showNavButton, setShowNavButton] = useState(true);

  const handleNavItemClick = (navItem) => {
    document.getElementById(navItem.pageId).scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return (
    <div className={css.toolbarContainer}>

      {/* MENU ICON */}
      {showNavButton && (
        <div
          data-aos="fade-in"
          data-aos-easing="ease"
          data-aos-duration="500"
          className={css.navIcon}
          onMouseEnter={() => {
            setShowNavMenu(true);
            setShowNavButton(false);
          }}
        >
          <div />
        </div>
      )}

      {/* NAV MENU */}
      {showNavMenu && (
        <div
          data-aos="fade-right"
          data-aos-easing="ease"
          data-aos-duration="400"
          className={css.menuContainer}
          onMouseLeave={() => {
            setShowNavMenu(false);
            setShowNavButton(true);
          }}
        >
          <div className={css.navItemList}>
            {/* NAV ITEMS */}
            {props.navItems.map((navItem) => (
              <div
                key={navItem.id}
                id={navItem.id}
                className={css.toolbarItem}
                onClick={() => {
                  handleNavItemClick(navItem);
                }}
              >
                {/* NAV ITEM NAME */}
                {navItem.label}

                { /* ACTIVE NAV ITEM */
                props.activeSection === navItem.pageId &&
                  <div className={css.circleAnimation} />
              }
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

const navItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  pageId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

Toolbar.propTypes = {
  navItems: PropTypes.arrayOf(navItemShape).isRequired,
  activeSection: PropTypes.string,
};

Toolbar.defaultProps = {
  activeSection: '',
};

export default Toolbar;
