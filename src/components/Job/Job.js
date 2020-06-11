import React from 'react'
import classes from './Job.module.css'

const job = (props) => (
    <div>
        <div className={classes.Titlebar}>
            <h2>{props.company}</h2>
            <p>{props.years}</p>
        </div>
        <h3>{props.position}</h3>
        {props.children}
    </div>
)

export default job