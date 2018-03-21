import React from 'react';
import _ from 'lodash';
import { Menu } from 'semantic-ui-react';
import menuItems from '../data/menuItems';

const NavBarDesktop = () => (
  <Menu color="teal" fixed="top" stackable>
    <Menu.Item header>Víctor Valencia</Menu.Item>
    <Menu.Menu position="right">
      {_.map(menuItems, item => <Menu.Item {...item} />)}
    </Menu.Menu>
  </Menu>
);

export default NavBarDesktop;
