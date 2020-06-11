import React from 'react'
import classes from './Home.module.css'

const home = () => (
    <div>
        <h1>About</h1>
        <p>Hello, my name is Michael Newman and I am a former product owner and project manager turned full stack web developer.</p>
        <p>I have worked in IT for over 15 years in numerous industries at companies of all sizes.</p>
        <div className={classes.line}></div>
    </div>
)

export default home