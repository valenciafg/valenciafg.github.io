import React from 'react';
import rsScroller from 'react-smooth-scroller';
import { Menu } from 'semantic-ui-react';

export default class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    
    state = {}
    scrollTarget(target){
        this.setState({ activeItem: target });
        if(target === 'home'){
            rsScroller.scrollToTop();
        }else{
            rsScroller.scrollToTarget(target);
        }
    }
    render(){
        const { activeItem } = this.state
        return(
            <Menu color={'teal'} fixed={'top'} stackable>
                <Menu.Item header>Víctor Valencia</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item
                    name='about'
                    active={activeItem === 'about'}
                    content='About'
                    onClick={() => this.scrollTarget('about')}
                    />
                    <Menu.Item
                    name='knowledge'
                    active={activeItem === 'knowledge'}
                    content='Knowledge'
                    onClick={() => this.scrollTarget('knowledge')}
                    />
                    <Menu.Item
                    name='portafolio'
                    active={activeItem === 'portafolio'}
                    content='Portafolio'
                    onClick={() => this.scrollTarget('portafolio')}
                    />
                    <Menu.Item
                    name='experience'
                    active={activeItem === 'experience'}
                    content='Experience'
                    onClick={() => this.scrollTarget('experience')}
                    />
                    <Menu.Item
                    name='contact'
                    active={activeItem === 'contact'}
                    content='Contact'
                    onClick={() => this.scrollTarget('contact')}
                    />                    
                </Menu.Menu>
            </Menu>
        );
    }
}
