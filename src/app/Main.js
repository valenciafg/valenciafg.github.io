import React, {Component} from 'react';
import WOW from 'wowjs';
import NavigationMenu from './components/NavigationMenu';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import KnowledgeSection from './components/KnowledgeSection';
import PortafolioSection from './components/PortafolioSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div>
        <NavigationMenu/>
        <div id={'main-content'} className={'content'}>
          <MainSection/>
          <AboutSection/>
          <KnowledgeSection/>
          <PortafolioSection/>
          <ExperienceSection/>
          <ContactSection/>
        </div>
      </div>
    );
  }
}

export default Main;
