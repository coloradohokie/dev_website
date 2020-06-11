import React from 'react'
import classes from './Home.module.css'

const home = () => (
    <div>
        <h1>About</h1>
        <p>Hello, my name is Michael Newman and I am a former business analyst, project manager, and product owner turned full stack web developer.</p>
        <p>I have worked in IT for over 15 years in numerous industries at companies of all sizes, with an emphasis on user experience. My passion is creating products that just work. After building a career of almost two decades do this, I decided I wanted to take a shot at coding. I said goodbye to my last contract gig just before the holidays in 2019, and in January 2020 I enrolled in Flatiron School's software development coding bootcamp.</p>

        <p>As the world has shifted to mobile browsing, smartphone apps, and the Internet of Things I've put my emphasis there as well. My focus has been on React and Ruby for web browsing, and a bit of Java for androidOS. I do still hope to pick up C++ and C# in the days ahead.</p>
        <div className={classes.line}></div>
    </div>
)

export default home