import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import Timeline from './Timeline';

const ExperienceSection = () => (
  <div className="experience">
    <Segment vertical textAlign="center" padded="very">
      <Header as="h1" icon textAlign="center">
        <Header.Content>
          <h1>Professional Experience</h1>
        </Header.Content>
      </Header>
      <Timeline />
    </Segment>
  </div>
);

export default ExperienceSection;
