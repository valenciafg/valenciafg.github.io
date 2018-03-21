import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import KnowledgeCharts from './KnowledgeCharts';

const divStyle = {
  top: '0',
  left: '0',
  width: '100%',
  height: 450,
};

const KnowledgeSection = () => (
  <div className="knowledge">
    <Segment
      vertical
      textAlign="center"
      padded="very"
      style={divStyle}
    >
      <Header as="h1" icon textAlign="center">
        <Header.Content>
          <h1>Knowledge</h1>
        </Header.Content>
      </Header>
      <KnowledgeCharts />
    </Segment>
  </div>
);

export default KnowledgeSection;
