import React, { Component } from 'react';
import classes from './Layout.module.css';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    toggleHandler = () => {
        if(this.state.showSideDrawer) {
            this.setState({showSideDrawer: false});
        }
        else {
            this.setState({showSideDrawer: true})
        }
    }

    render() {
        return (
            <Aux>
                <Toolbar toggle={this.toggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.toggleHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;