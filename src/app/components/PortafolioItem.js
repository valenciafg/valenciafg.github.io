import React, {Component} from 'react';
import { Card, Icon, Image, Label } from 'semantic-ui-react'

export default class PortafolioItem extends React.Component {
    constructor(props) {
        super(props);
    }
    listTechnologies(technologies){
        return technologies.map((info)=>{
            return(
                <Label tag color="black">{info.name}</Label>
            );
        });
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
                    {this.listTechnologies(this.props.info.technologies)}
                </Card.Content>
            </Card>
        );
    }
}
