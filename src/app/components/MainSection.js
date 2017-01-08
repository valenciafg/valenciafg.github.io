import React, {Component} from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const id = 'main';
        return(
            <div>
                <Segment vertical className={id} textAlign='center' padded='very'>
                    <Header as='h1' icon textAlign='center'>
                        <Icon name='users' circular />
                        <Header.Content>
                            Víctor Valencia
                            <Header.Subheader>
                                Manage your preferences
                            </Header.Subheader>
                        </Header.Content>
                    </Header>
                </Segment>
            </div>
        );
    }
}
