import React, { Component } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'

class Layout extends Component {

    render() {
        return(
            <>
            <Toolbar />
            <main>
                {this.props.children}
            </main>
            <footer className={classes.Footer}>
                Copyright {new Date().getFullYear()}, Michael Newman
            </footer>
            </>
        )
    }

}

export default Layout