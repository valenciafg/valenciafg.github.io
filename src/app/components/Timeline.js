import React, {Component} from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';
var data = [
    {
        title: "Web Developer",
        company: "Experiensa",
        url: "",
        date:"May 2016",
        description: "asdasd"
    },
    {
        title: "Web Developer",
        company: "Vhicoa",
        url: "",
        date:"",
        description: "zzzzzzzzzzzz"
    },
    {
        title: "Web Developer",
        company: "Seguros Caroní, S.A.",
        url: "",
        date:"",
        description: "xxxxxxxxxxxxx"
    }
]

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <ul>
                <li>
                    <p>{data[0].description}</p>
                </li>
                <li>
                    <p>{data[1].description}</p>
                </li>
                <li>
                    <p>{data[2].description}</p>
                </li>
            </ul>
        );
    }
}
