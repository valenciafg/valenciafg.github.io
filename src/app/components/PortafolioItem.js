import React, { Component } from 'react';
import { Card, Icon, Image, Label } from 'semantic-ui-react';

export default class PortafolioItem extends Component {
  constructor (props) {
    super(props);
  }
  listTechnologies (technologies) {
    return technologies.map((info, i) => {
      return (
          <Label key={i} tag color="black">{info.name}</Label>
      );
    });
  }
  render () {
    return (
        <Card className="portafolio-item">
            <Image src={this.props.info.image} />
            <Card.Content>
                <Card.Header>
                    {this.props.info.title}
                </Card.Header>
                <Card.Description>
                    {this.props.info.description}
                </Card.Description>
                <Card.Meta>
                    <br/>
                    <Label color="black" as="a" href={this.props.info.url} target="_blank">
                        <Icon name="code"/>
                    </Label>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                {this.listTechnologies(this.props.info.technologies)}
            </Card.Content>
        </Card>
    );
  }
}
