import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import PortafolioItem from './PortafolioItem';
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius auctor placerat. Aenean aliquam massa ac blandit porttitor. Vestibulum vel sapien pellentesque diam convallis viverra.";
var portafolio = [
    {
        index: 0,
        title: "Villa Blanca",
        description: "",
        image: "dist/images/villablanca.png",
        technologies: [
            {name:"Wordpress"},
            {name:"PHP"},
            {name:"Semantic-UI"},
            {name:"jQuery"},
            {name:"ReactJS"}
        ],
        url: "http://villablancabarcelona.com/"
    },
    {
        index: 1,
        title: "Dokument v2.0",
        image: "dist/images/dokument.png",
        technologies: [
            {name:"Codeigniter"},
            {name:"PHP"},
            {name:"MySQL"},
            {name:"AdminLTE"},
            {name:"Bootstrap"}
        ],
        description: "",
        url: "http://www.linuxsolutions.com.ve/dokument-software-de-digitalizacion-y-gestion-de-documentos/"
    },
    {
        index: 2,
        title: "Hotel Plaza Merú Website Improvements",
        image: "dist/images/meru.png",
        technologies: [
            {name:"PHP"},
            {name:"Bootstrap"},
            {name:"jQuery"}
        ],
        description: "lorem",
        url: "https://www.hotelplazameru.com/"
    },
    {
        index: 3,
        title: "Rotary Guards Control System",
        image: "dist/images/guardias.png",
        technologies: [
            {name:"Web2py"},
            {name:"Python"},
            {name:"Bootstrap"},
            {name:"jQuery"}
        ],
        description: "",
        url: ""
    },
    {
        index: 4,
        title: "List of Car Workshops and Health Centers",
        image: "dist/images/sc.png",
        technologies: [
            {name: "Codeigniter"},
            {name: "Oracle"},
            {name: "jQuery"}
        ],
        description: "lorem",
        url: "http://www.seguroscaroni.com/"
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
