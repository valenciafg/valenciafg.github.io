import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import PortafolioItem from './PortafolioItem';

var portafolio = [
    {
        index: 0,
        title: 'Villa Blanca',
        description: 'Website to Villa Blanca mansion located in Barcelona, Spain',
        image: 'dist/images/villablanca.png',
        technologies: [
            {name:'Wordpress'},
            {name:'PHP'},
            {name:'Semantic-UI'},
            {name:'jQuery'},
            {name:'ReactJS'}
        ],
        url: 'http://villablancabarcelona.com/'
    },
    {
        index: 1,
        title: 'Dokument v2.0',
        image: 'dist/images/dokument.png',
        technologies: [
            {name:'Codeigniter'},
            {name:'PHP'},
            {name:'MySQL'},
            {name:'AdminLTE'},
            {name:'Bootstrap'}
        ],
        description: 'It\'s an application dedicated to the digitalization and massive management of documents, helps to lower the high number of consumables in the office',
        url: 'http://www.linuxsolutions.com.ve/dokument-software-de-digitalizacion-y-gestion-de-documentos/'
    },
    {
        index: 2,
        title: 'Hotel Plaza Merú Website',
        image: 'dist/images/meru.png',
        technologies: [
            {name:'PHP'},
            {name:'Bootstrap'},
            {name:'jQuery'}
        ],
        description: 'Improvements to the backend structure, integration of the language switch component, creation of the reservation component, as well as some changes to the user interface',
        url: 'https://www.hotelplazameru.com/'
    },
    {
        index: 3,
        title: 'Rotary Guards Control System',
        image: 'dist/images/guardias.png',
        technologies: [
            {name:'Web2py'},
            {name:'Python'},
            {name:'Bootstrap'},
            {name:'jQuery'}
        ],
        description: 'Activities control system for IT staff ',
        url: 'https://github.com/valenciafg/rgcs'
    },
    {
        index: 4,
        title: 'List of Car Workshops and Health Centers',
        image: 'dist/images/sc.png',
        technologies: [
            {name: 'Codeigniter'},
            {name: 'Oracle'},
            {name: 'jQuery'}
        ],
        description: 'Search and reporting of health care providers and auto shops',
        url: 'http://www.seguroscaroni.com/'
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
