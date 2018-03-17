import React from 'react';
import Aux from '../../hoc/Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

import classes from './Layout.css';

const Layout = props => (
  <Aux>
    <div>
      Toolbar, SideDrawer, Backdrop
    </div>
    <main className={classes.Content}>
      <BurgerBuilder/>
    </main>
  </Aux>
);

export default Layout;