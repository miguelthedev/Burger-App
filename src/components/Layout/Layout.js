import React from 'react';
import Aux from '../../hoc/Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.css';

const Layout = props => (
  <Aux>
    <Toolbar/>
    <main className={classes.Content}>
      <BurgerBuilder/>
    </main>
  </Aux>
);

export default Layout;