import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.module.css'

const toolbar = () => (
    <header className={classes.Toolbar}>
        <p className={classes.Name}>Michael Newman</p>
        <NavigationItems />
    </header>
)

export default toolbar