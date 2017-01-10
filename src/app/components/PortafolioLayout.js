import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import PortafolioItem from './PortafolioItem';
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius auctor placerat. Aenean aliquam massa ac blandit porttitor. Vestibulum vel sapien pellentesque diam convallis viverra.";
var portafolio = [
    {
        index: 0,
        title: "Villa Blanca",
        description: lorem,
        image: "dist/images/villablanca.png",
        technologies: "",
        url: "http://villablancabarcelona.com/"
    },
    {
        index: 1,
        title: "aasdsadas1",
        image: "",
        technologies: "",
        description: lorem,
        url: ""
    },
    {
        index: 2,
        title: "a112131",
        image: "",
        technologies: "",
        description: lorem,
        url: ""
    },
    {
        index: 3,
        title: "a112131",
        image: "",
        technologies: "",
        description: lorem,
        url: ""
    },
    {
        index: 4,
        title: "a112131",
        image: "",
        technologies: "",
        description: lorem,
        url: ""
    },
    {
        index: 5,
        title: "a112131",
        image: "",
        technologies: "",
        description: lorem,
        url: ""
    },
    {
        index: 6,
        title: "a112131",
        image: "",
        technologies: "",
        description: lorem,
        url: ""
    },
    {
        index: 7,
        title: "a112131",
        image: "",
        technologies: "",
        description: lorem,
        url: ""
    }
];
export default class PortafolioLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    listPortafolio(){
        return portafolio.map((info)=>{
            return(
                <PortafolioItem info={info} key={info.index}/>
            );
        });
    }
    render(){
        return(
            <Card.Group itemsPerRow={4} stackable>
                {this.listPortafolio()}
            </Card.Group>
        );
    }
}
