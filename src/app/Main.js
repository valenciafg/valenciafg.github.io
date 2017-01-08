/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import NavigationMenu from './components/NavigationMenu';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
//import KnowledgeSection from './components/knowledgeSection';
//import PortafolioSection from './components/PortafolioSection';
//import ExperienceSection from './components/ExperienceSection';
//import ContactSection from './components/ContactSection';

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <NavigationMenu/>
        <div id={"main-content"} className={"content"}>
          <MainSection/>
          <AboutSection/>
        </div>
      </div>
    );
  }
}

export default Main;
