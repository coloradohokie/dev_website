import React from 'react'
import classes from './PortfolioPiece.module.css'
import YouTube from 'react-youtube'
import image from '../../assets/engineering-project-manager.jpg'
import rubyLogo from '../../assets/logos/ruby-logo.png'
import reactLogo from '../../assets/logos/react-logo.png'
import javaLogo from '../../assets/logos/java-logo.png'

const portfolioPiece = (props) => (
    <div className={classes.PortfolioPiece}>
        <div className={classes.Header}>
            <h2>{props.name}</h2>
            <p style={{fontWeight: "600", color: "var(--background-color)"}}>{props.date}</p>
        </div>
        <div className={classes.TopBody}>
            <img src={image} alt="Screenshot" />
            <div className={classes.SidePanel}>
                <div className={classes.Links}>
                    <h3>Code</h3>
                    <a href={props.backendUrl}>Backend</a>
                    <a href={props.frontendUrl}>Frontend</a>
                    <a href={props.websiteUrl}>Website</a>
                </div>
                <div className={classes.Links}>
                    <h3>Stack</h3>
                    {/* <p>{props.languages}</p> */}
                    <div className={classes.Icons}>
                        <img src={rubyLogo} alt="Ruby" width="25" height="50" />
                        <p>Ruby</p>
                    </div>

                    <div className={classes.Icons}>
                        <img src={reactLogo} alt="React.js" width="50" height="50"  />
                        <p>React.js</p>
                    </div>

                    <div className={classes.Icons}>
                        <img src={javaLogo} alt="Java" width="50" height="50"  />
                        <p>Java</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.Body}>
            <p>{props.children}</p>
            <div className={classes.VideoWrapper}>
            <div className={classes.Video}>
                <YouTube videoId="ECDzoRJHfdA" opts={{width: '560', height: '315'}} />
            </div>
            </div>
        </div>
    </div>

)
export default portfolioPiece