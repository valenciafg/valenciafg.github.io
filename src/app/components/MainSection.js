import React, { Component } from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';
import TypeWriter from 'react-typewriter';
import tati from '../../images/tati.jpeg';
console.log('la url de tati es', tati);
const loves = [
  {
    id: 1,
    text: 'Full Stack Developer'
  },
  {
    id: 2,
    text: 'Linux User'
  },
  {
    id: 3,
    text: 'Python & ReactJS Lover'
  },
  {
    id: 4,
    text: 'Full Stack Web Developer'
  },
  {
    id: 5,
    text: 'Full Stack Web Developer'
  },
  {
    id: 6,
    text: 'Full Stack Web Developer'
  },
  {
    id: 7,
    text: 'Full Stack Web Developer'
  }
];

export default class MainSection extends Component {
  constructor (props) {
    super(props);
      // this.wow = new WOW().init();
  }
    // componentDidMount(){
    //   this.wow.sync();
    // }
  render () {
    const id = 'main';
    return (
        <div className={id}>
            <Segment vertical textAlign="center" padded="very">
                <Image src={tati} size="small" shape="circular" alt="profile picture" centered/>
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
