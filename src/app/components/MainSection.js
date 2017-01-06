import React, {Component} from 'react';

export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const id = 'main';
        return(
            <div className={id}>
                <h1>Víctor Valencia</h1>
            </div>
        );
    }
}
