import React from 'react';
import Aux from '../../hoc/Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

const Layout = props => (
  <Aux>
    <Toolbar/>
    <SideDrawer/>
    <main className={classes.Content}>
      <BurgerBuilder/>
    </main>
  </Aux>
);

export default Layout;