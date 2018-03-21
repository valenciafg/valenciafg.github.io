import React from 'react';
import PropTypes from 'prop-types';

const NavBarChildren = ({ children }) => (
  <div>{children}</div>
);

NavBarChildren.propTypes = {
  children: PropTypes.element.isRequired,
};

export default NavBarChildren;
