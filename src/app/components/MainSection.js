import React, {Component} from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';

export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const id = 'main';
        return(
            <div className={id}>
                <Segment vertical textAlign='center' padded='very'>
                    <Header as='h1' icon textAlign='center'>
                        <Image src='dist/images/tati.png' size='small' shape='circular' />
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
