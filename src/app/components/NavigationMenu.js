import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import rsScroller from 'react-smooth-scroller';

export default class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    onScrollTop() {
        rsScroller.scrollToTop();
    }
    onScrollTarget(target) {
        rsScroller.scrollToTarget(target);
    }
    render(){
        return(
            <Toolbar style={{position: 'fixed'}}>
                <ToolbarTitle text="Víctor Valencia" />
                <ToolbarSeparator />
                <a onClick={this.onScrollTop} href="#main">Home</a>
                <a onClick={() => this.onScrollTarget('about')}>About</a>
                <a onClick={() => this.onScrollTarget('knowledge')}>Knowledge</a>
                <a onClick={() => this.onScrollTarget('portafolio')}>Portafolio</a>
                <a onClick={() => this.onScrollTarget('experience')}>Experience</a>
                <a onClick={() => this.onScrollTarget('contact')}>Contact</a>
            </Toolbar>
        );
    }
}
