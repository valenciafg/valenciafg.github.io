import React, {Component} from 'react';
import { Label, Card } from 'semantic-ui-react';

export default class TimelineItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          position: (this.props.left?'left':'right')
        }
    }
    render(){
        return(
            <li>
                <Label basic pointing={this.state.position}>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                  {this.props.info.title}
                            </Card.Header>
                            <Card.Meta>
                             {this.props.info.company}
                           </Card.Meta>
                           <Card.Description>
                              {this.props.info.description}
                            </Card.Description>
                         </Card.Content>
                     </Card>
                </Label>
            </li>
        );
    }
}
