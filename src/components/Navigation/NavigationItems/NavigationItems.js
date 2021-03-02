import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import { checkPropTypes } from 'prop-types';
const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' >Burger Builder</NavigationItem>
        <NavigationItem link='/orders' exact={props.exact}>Orders</NavigationItem>
        <NavigationItem link='/auth' >Authenticate</NavigationItem>
    </ul>
);

export default navigationItems