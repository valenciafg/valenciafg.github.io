import React, {Component} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default class PortafolioItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Card className="portafolio-item">
                <Image src={this.props.info.image} />
                <Card.Content>
                    <Card.Header>
                        {this.props.info.title}
                    </Card.Header>
                    <Card.Meta>
                        {this.props.info.url}
                    </Card.Meta>
                    <Card.Description>
                        {this.props.info.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {this.props.info.technologies}
                </Card.Content>
            </Card>
        );
    }
}