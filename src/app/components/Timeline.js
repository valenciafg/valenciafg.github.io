import React, {Component} from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';
import TimelineItem from './TimelineItem';
var data = [
    {
        index: 0,
        title: 'Fullstack Developer',
        company: 'Plaza Merú Hotel',
        url: 'https://www.hotelplazameru.com/',
        date:'Nov 2016',
        description: 'In charge of including new functionalities to the hotel website, including multi-languages, request for reservations and improvements of graphical interface. \nCreation of telephone call reporting system with communication with Alcatel OmniPCX, using the development tools Node.js, ReactJS, SerialPort, Socket.IO.\nIntegrated application development with P2000 Johnson Controls access control system, using CodeIgniter and jQuery'
    },
    {
        index: 1,
        title: 'Web Developer',
        company: 'SEVINCI - Experiensa',
        url: 'http://experiensa.com/',
        date:'May 2016',
        description: 'Full stack development, using WordPress, Roots / Sage starter theme, jQuery and ReactJS, PHP, SASS, NodeJS WEB platforms focused on the tourist area.'
    },
    {
        index: 2,
        title: 'Web Developer',
        company: 'Vhicoa',
        url: 'http://www.vhicoa.com/',
        date:'Sep 2015',
        description: 'Development under web infrastructure, using JAVA / smartGWT / SQL Server 2008, of management modules and manufacturing management of metal structures. Generation of statistical reports of production control.'
    },
    {
        index: 3,
        title: 'Specialist in Information Web Systems',
        company: 'Seguros Caroní, S.A.',
        url: 'http://www.seguroscaroni.com/caroni/web/index.php',
        date:'Apr 2015',
        description: 'Analysis, design and development of web applications. Management of extranet servers under Linux environment. Support for extranet systems users. Optimization of administrative and operational processes of the company focused on the web environment.'
    },
    {
        index: 4,
        title: 'Support and Infrastructure Specialist',
        company: 'Seguros Caroní, S.A.',
        url: 'http://www.seguroscaroni.com/caroni/web/index.php',
        date:'Apr 2013',
        description: 'Administration and configuration of servers, workstations and other computer equipment. Installation, maintenance and configuration of hardware and software of existing computer equipment in the company. Monitoring of communication networks, in order to optimize communication between the different locations and the main office of Seguros Caroní. Management of access keys and profiles for existing application users under MS Active Directory. Support to users in application and computer equipment.'
    },
    {
        index: 5,
        title: 'Computer Science Teacher',
        company: 'Instituto Universitario Politécnico Santiago Mariño',
        url: 'http://www.psmpuertoordaz.edu.ve/',
        date:'Sep 2011',
        description: 'Teacher in the area of Information and Communication Technologies, aimed at students of the career of systems engineering.'
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
