import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Header } from 'semantic-ui-react';
import 'react-vertical-timeline-component/style.min.css';
import timeline from '../data/timeline';

function timelineItems() {
  return timeline.map(info => (
    <VerticalTimelineElement
      key={info.id}
      className="vertical-timeline-element--work"
      date={info.date}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
      <Header as="h3" textAlign="left">{info.title}</Header>
      <Header as="h4">
        {info.company}
        <Header.Subheader>{info.address}</Header.Subheader>
      </Header>
      <p>{info.description}</p>
    </VerticalTimelineElement>
  ));
}

const Timeline = () => (
  <VerticalTimeline>
    {timelineItems()}
  </VerticalTimeline>
);

export default Timeline;
