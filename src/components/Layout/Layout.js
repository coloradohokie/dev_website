import React, { Component } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'

class Layout extends Component {

    render() {
        return(
            <>
            <Toolbar />
            <main>
                {this.props.children}
            </main>
            </>
        )
    }

}

export default Layout