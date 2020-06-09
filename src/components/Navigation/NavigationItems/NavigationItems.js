import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem name="Home" link="/" exact />
        <NavigationItem name="Resume" link="/resume" />
        <NavigationItem name="Blog" link="/blog" />
        <NavigationItem name="Portfolio" link="/portfolio" />
        <NavigationItem name="Contact" link="/contact" />
    </ul>
)

export default navigationItems