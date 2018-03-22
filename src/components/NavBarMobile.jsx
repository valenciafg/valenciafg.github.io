import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Menu, Sidebar, Icon } from 'semantic-ui-react';
import { Link } from 'react-scroll';
import menuItems from '../data/menuItems';

const NavBarMobile = ({
  children,
  onPusherClick,
  onToggle,
  visible,
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={visible}
    >
      {_.map(menuItems, item => (
        <Link
          {...item}
          className="item"
          to={item.key}
          spy
          smooth
          duration={250}
        >
          {item.content}
        </Link>
      ))
      }
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: '100vh' }}
    >
      <Menu color="teal" fixed="top" inverted>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

NavBarMobile.propTypes = {
  children: PropTypes.element.isRequired,
  onPusherClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default NavBarMobile;
