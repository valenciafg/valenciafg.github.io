import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import PortafolioLayout from './PortafolioLayout';

const PortafolioSection = () => (
  <div className="portafolio">
    <Segment vertical textAlign="center" padded="very">
      <Header as="h1" icon textAlign="center">
        <Header.Content>
          <h1>Portafolio</h1>
        </Header.Content>
      </Header>
      <Container>
        <PortafolioLayout />
      </Container>
    </Segment>
  </div>
);

export default PortafolioSection;
