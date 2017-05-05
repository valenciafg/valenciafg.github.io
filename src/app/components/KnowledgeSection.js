import React, { Component } from 'react';
import { Header, Segment, Container } from 'semantic-ui-react';
import { Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis } from 'recharts';
const data = [
    { subject: 'PHP', A: 86, fullMark: 100 },
    { subject: 'Javascript', A: 80, fullMark: 100 },
    { subject: 'ReactJS', A: 75, fullMark: 100 },
    { subject: 'jQuery', A: 70, fullMark: 100 },
    { subject: 'Database', A: 82, fullMark: 100 },
    { subject: 'Python', A: 60, fullMark: 100 }
];
export default class KnowledgeSection extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    const id = 'knowledge';
    return (
        <div className={id}>
            <Segment vertical textAlign="center" padded="very">
                <Header as="h1" icon textAlign="center">
                    <Header.Content>
                        <h1>Knowledge</h1>
                    </Header.Content>
                </Header>
                <Container textAlign="center">
                    <RadarChart
                      cx={300} cy={250} outerRadius={150}
                      width={600} height={500} data={data}
                      margin={{ top: 5, right: 20, left: 10, bottom: 15 }}
                      style={{ display: "inline-block" }}
                    >
                        <Radar name="Knowledge" dataKey="A" stroke="#E7B216" fill="#00BCD4" fillOpacity={0.6}/>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" axisLineType="circle"/>
                        <PolarRadiusAxis/>
                    </RadarChart>
                </Container>
            </Segment>
        </div>
    );
  }
}
