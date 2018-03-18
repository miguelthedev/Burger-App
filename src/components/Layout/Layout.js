import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  render() {
    return (
      <Aux>
        <Toolbar/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          <BurgerBuilder/>
        </main>
      </Aux>
    )
  }
}

export default Layout;