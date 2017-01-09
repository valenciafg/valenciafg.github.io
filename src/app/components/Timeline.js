import React, {Component} from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';
import TimelineItem from './TimelineItem';
var data = [
    {
        index: 0,
        title: "Web Developer",
        company: "Experiensa",
        url: "",
        date:"May 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet eros arcu, vel auctor arcu tincidunt id. Duis nec enim eget enim semper maximus sed a orci."
    },
    {
        index: 1,
        title: "Web Developer",
        company: "Vhicoa",
        url: "",
        date:"",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet eros arcu, vel auctor arcu tincidunt id. Duis nec enim eget enim semper maximus sed a orci."
    },
    {
        index: 2,
        title: "Web Developer",
        company: "Seguros Caroní, S.A.",
        url: "",
        date:"",
        description: "Pellentesque sagittis sed velit in tristique. Pellentesque pretium convallis augue nec eleifend. Nullam venenatis sem et sem condimentum pharetra. Proin id lacus tellus. Nam cursus condimentum nulla, quis aliquet erat molestie non. In at quam eget augue blandit mollis. Nam nec suscipit ipsum, vitae dapibus diam. In vulputate faucibus metus eget euismod. Aliquam molestie urna sed urna convallis, a posuere massa consequat."
    },
    {
        index: 3,
        title: "Support and Infrastructure Specialist",
        company: "Seguros Caroní, S.A.",
        url: "",
        date:"",
        description: "Pellentesque sagittis sed velit in tristique. Pellentesque pretium convallis augue nec eleifend. Nullam venenatis sem et sem condimentum pharetra. Proin id lacus tellus. Nam cursus condimentum nulla, quis aliquet erat molestie non. In at quam eget augue blandit mollis. Nam nec suscipit ipsum, vitae dapibus diam. In vulputate faucibus metus eget euismod. Aliquam molestie urna sed urna convallis, a posuere massa consequat. "
    }
]

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }
    listExperiences(){
        return data.map((info)=>{
            return(
                <TimelineItem info={info} left={info.index % 2} key={info.index}/>
            );
        });
    }
    render(){
        return(
            <ul className="timeline">
                {this.listExperiences()}
            </ul>
        );
    }
}
