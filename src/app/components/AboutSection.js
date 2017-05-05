import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

export default class AboutSection extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    const id = 'about';
    return (
        <div className={id}>
            <Segment vertical textAlign="center" padded="very">
                <Header as="h1" icon textAlign="center">
                    <Header.Content>
                        <h1>About Me</h1>
                    </Header.Content>
                </Header>
                <p className="segment-content wow fadeInUp">
                    I'm a new development technologies enthusiast who loves music, video games, good home cooking and my family
                </p>
            </Segment>
        </div>
    );
  }
}
