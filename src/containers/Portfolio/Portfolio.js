import React from 'react'
import PortfolioPiece from '../../components/PortfolioPiece/PortfolioPiece'

const portfolio = () => (
    <div>
        <h1>Portfolio</h1>
        <p>This is the portfolio page.</p>

        <PortfolioPiece
            name="Engineering Project Management App"
            description="This app was created as my project for Module 4" />

        <PortfolioPiece
            name="Historical Marker"
            description="This app was created as my project for Module 4" />

        <PortfolioPiece
            name="MichaelNewman.dev"
            description="This app was created as my project for Module 4" />

        <PortfolioPiece
            name="Burger Builder"
            description="This app was created as my project for Module 4" />

        <PortfolioPiece
            name="Let's Ride!"
            description="This app was created as my project for Module 4" />

        <PortfolioPiece
            name="Motorcycle Route Finder"
            description="This app was created as my project for Module 4" />


    </div>
)

export default portfolio