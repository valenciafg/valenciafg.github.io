import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';
import NavBarChildren from './NavBarChildren';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

class NavMenu extends Component {
  state = {
    visible: false,
  };
  handlePusher = () => {
    const { visible } = this.state;
    if (visible) this.setState({ visible: false });
  };
  handleToggle = () => this.setState({
    visible: !this.state.visible,
  });
  render() {
    const { children } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

NavMenu.propTypes = {
  children: PropTypes.element.isRequired,
};

export default NavMenu;
