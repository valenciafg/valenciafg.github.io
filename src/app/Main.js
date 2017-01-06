/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {cyan800} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationMenu from './components/NavigationMenu';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import KnowledgeSection from './components/knowledgeSection';
import PortafolioSection from './components/PortafolioSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: cyan800,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <div>
              <NavigationMenu/>
              <MainSection/>
              <AboutSection/>
              <KnowledgeSection/>
              <PortafolioSection/>
              <ExperienceSection/>
              <ContactSection/>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
