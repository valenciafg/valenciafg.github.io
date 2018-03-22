import React from 'react';
import _ from 'lodash';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-scroll';
import menuItems from '../data/menuItems';

const NavBarDesktop = () => (
  <Menu color="teal" fixed="top" stackable>
    <Menu.Item header>Víctor Valencia</Menu.Item>
    <Menu.Menu position="right">
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
    </Menu.Menu>
  </Menu>
);

export default NavBarDesktop;
