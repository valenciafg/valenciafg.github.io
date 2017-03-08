import React, {Component} from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';
import TypeWriter from 'react-typewriter';
import WOW from 'wowjs/dist/wow.js';

var loves = [
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
]
export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
        // this.wow = new WOW().init();
    }
    // componentDidMount(){
    //   this.wow.sync();
    // }
    render(){
        const id = 'main';
        return(
            <div className={id}>
                <Segment vertical textAlign='center' padded='very'>
                    <Header as='h1' icon textAlign='center'>
                        <Image src='dist/images/tati.JPG' size='large' shape='circular' alt="profile picture" />
                        <Header.Content>
                            <TypeWriter typing={1} fixed={true}>
                              Víctor Valencia
                            </TypeWriter>
                            <Header.Subheader className="wow fadeInUp">
                              description here
                            </Header.Subheader>
                        </Header.Content>
                    </Header>
                </Segment>
            </div>
        );
    }
}
