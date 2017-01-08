import React, {Component} from 'react';
import { Header, Segment } from 'semantic-ui-react';

export default class AboutSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const id = 'about';
        return(
            <div>
                <Segment vertical className={id} textAlign='center' padded='very'>
                    <Header as='h1' icon textAlign='center'>
                        <Header.Content>
                            <h1>About Me</h1>
                            <p>
                    Lorem ipsum dolor sit amet, justo orci imperdiet, fringilla congue, fames duis blandit. Ac hac adipiscing nullam justo vestibulum vestibulum. Tortor ultrices pede. Pellentesque tincidunt hac gravida, eros mauris vivamus dolor diam pede. Vivamus neque, nam nec sem, blandit ligula et wisi, a volutpat pharetra rhoncus et tortor. Non quam justo, purus tortor elit est ullamcorper velit dui, at magna iaculis nullam pharetra vestibulum, massa cum cursus, vivamus sapien purus felis. Eget dui, sed quis odio consectetuer tellus platea a, imperdiet amet in nullam aliquam. In eros lobortis praesent placerat, hymenaeos ornare proin magna suscipit. Lacus tellus turpis, expedita vel id, congue sit ullamco neque. Rhoncus praesent at, integer commodo nulla nullam pede massa elit, tempus facilisi ut vel litora. Dui aptent vel semper, nec leo gravida posuere turpis, ipsum nulla sed vestibulum fringilla.
                            </p>
                        </Header.Content>
                    </Header>
                </Segment>
            </div>
        );
    }
}
