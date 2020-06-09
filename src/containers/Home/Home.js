import React from 'react'
import classes from './Home.module.css'

const home = () => (
    <div>
        <h1>About</h1>
        <p>This is the about page.</p>
        <div className={classes.line}></div>
    </div>
)

export default home