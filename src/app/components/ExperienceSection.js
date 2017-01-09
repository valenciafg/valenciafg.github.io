import React, {Component} from 'react';
import { Header, Segment } from 'semantic-ui-react';
import Timeline from './Timeline';

export default class ExperienceSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const id = 'experience';
        return(
            <div className={id}>
                <Segment vertical textAlign='center' padded='very'>
                    <Header as='h1' icon textAlign='center'>
                        <Header.Content>
                            <h1>Professional Experience</h1>
                            <Timeline/>
                        </Header.Content>
                    </Header>
                </Segment>
            </div>
        );
    }
}
