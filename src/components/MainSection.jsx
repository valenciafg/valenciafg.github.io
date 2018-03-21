import React, { Component } from 'react';
import $ from 'jquery';
import 'vegas';
import 'vegas/dist/vegas.css';
import { Header, Segment } from 'semantic-ui-react';

import amores from '../images/amores.jpg';
import orinoco from '../images/orinoco.jpg';

class MainSection extends Component {
  componentDidMount() {
    $('.main').css('height', '618');
    $('.main').vegas({
      overlay: true,
      transition: 'fade',
      transitionDuration: 4000,
      delay: 10000,
      color: 'red',
      animation: 'random',
      animationDuration: 20000,
      slides: [
        { src: amores },
        { src: orinoco },
      ],
    });
  }
  componentWillUnmount() {
    $('.main').vegas('destroy');
  }
  render() {
    return (
      <div className="main">
        <Segment vertical textAlign="center" padded="very">
          <Header as="h1" icon textAlign="center">
            <Header.Content>
              <div>
                Víctor Valencia
              </div>
              <Header.Subheader className="wow fadeInUp">
                Full Stack Developer
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Segment>
      </div>
    );
  }
}

export default MainSection;
