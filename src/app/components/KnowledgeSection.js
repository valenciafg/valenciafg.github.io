import React, {Component} from 'react';
import { Header, Segment, Container } from 'semantic-ui-react';
import {Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis} from 'recharts';
const data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
];
export default class KnowledgeSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const id = 'knowledge';
        return(
            <div className={id}>
                <Segment vertical textAlign='center' padded='very'>
                    <Header as='h1' icon textAlign='center'>
                        <Header.Content>
                            <h1>Knowledge</h1>
                        </Header.Content>
                    </Header>
                    <Container>
                        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis/>
                        </RadarChart>
                    </Container>
                </Segment>
            </div>
        );
    }
}
