import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import rsScroller from 'react-smooth-scroller';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

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
            <AppBar
            title={<span>Víctor Valencia</span>}
            style={{position: 'fixed'}}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={
                <div>
                <FlatButton label="Home" onClick={this.onScrollTop}/>
                <FlatButton label="About" onClick={() => this.onScrollTarget('about')}/>
                <FlatButton label="Knowledge" onClick={() => this.onScrollTarget('knowledge')}/>
                <FlatButton label="Portafolio" onClick={() => this.onScrollTarget('portafolio')}/>
                <FlatButton label="Experience" onClick={() => this.onScrollTarget('experience')}/>
                <FlatButton label="Contact" onClick={() => this.onScrollTarget('contact')}/>
                </div>
            }
            />
        );
    }
}
