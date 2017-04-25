import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import PortafolioLayout from './PortafolioLayout';

export default class PortafolioSection extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    const id = 'portafolio';
    return (
        <div className={id}>
            <Segment vertical textAlign="center" padded="very">
                <Header as="h1" icon textAlign="center">
                    <Header.Content>
                        <h1>Portafolio</h1>
                    </Header.Content>
                </Header>
                <PortafolioLayout/>
            </Segment>
        </div>
    );
  }
}
