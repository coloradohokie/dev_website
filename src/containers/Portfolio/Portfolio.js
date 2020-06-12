import React from 'react'
import PortfolioPiece from '../../components/PortfolioPiece/PortfolioPiece'
import image from '../../assets/engineering-project-manager.jpg'

const portfolio = () => (
    <div>
        <h1>Portfolio</h1>
        <p>This is the portfolio page.</p>

        <PortfolioPiece
            name="Engineering Project Management App"
            frontendUrl="https://github.com/coloradohokie/eng-mgmt-tool-frontend"
            backendUrl="https://github.com/coloradohokie/eng-mgmt-tool-backend"
            websiteUrl="https://engineering-project-manager.firebaseapp.com/"
            videoUrl='<iframe width="560" height="315" src="https://www.youtube.com/embed/ECDzoRJHfdA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            image="../../assets/engineering-project-manager.jpg"
            date="June, 2020"
            languages="React.js, HTML, CSS, Ruby">
                <p>Originally created to fill a requirement for Module 4 of Flatiron School, this project has become my baby. And I mean that not just that I care about it a lot and dote over it, but also in that it keeps me up at night, complains about what I'm doing frequently without providing many clues on how to fix it, and I'm constantly looking for ways to make it better.</p>

                <p>The unique part of this app is that I developed it for one of my friends who works in building construction. They were telling me about how they manage their projects and I thought that software could help with that. This fact alone make the project much more challenging because I had a set of requirements and I couldn't just change them because something was hard; I had to figure it out. I felt this made for a great project because it was real-world experience</p>

                <p>The purpose of the app is to allow the user to enter and manage projects as they work through the office. There are differnt types of projects (Proposals, and Building Projects) which require different tasks to be completed. The user selects the project type when creating it, and a series of tasks are attached based on the project type. The user checks off the tasks as they complete them. This part is done using optimistic rendering.</p>

                <p>The user can also edit the project information and update the status of the project. The system will tell you the percent complete of each project. The user can also filter projects based on status, and sort the projects based on a variety of properties. All project editing is done inline and optimistically rendered from the server.</p>

                <p>The project is written in React on the front end and Ruby on the back end. It is hosted on Firebase and Heroku using PostGresQL. I've been working on this project off and on for since March 2020 and will continue to do so as the feature level of this project and it's real-world application make for a great learning experience.</p>

                <p>You can read more about the development of this project on my blog.</p>
        </PortfolioPiece>


        <PortfolioPiece
            name="Historical Marker Android App"
            frontendUrl="https://github.com/coloradohokie/eng-mgmt-tool-frontend"
            backendUrl="https://github.com/coloradohokie/eng-mgmt-tool-backend"
            website="https://engineering-project-manager.firebaseapp.com/"
            videoUrl=""
            date="April, 2020"
            languages="Java, Ruby">
                <p>This was my Capstone project for Flatiron School. The requirements for the Capstone project was that you needed to create an app in a language you've never used before. I knew I wanted to do this app about half way through the coding bootcamp.</p>

                <p>This is an android app which reads off the content of historical markers as you drive past them. The inspiration for this is self-serving. I travel by car a lot and I frequently come across historical markers as I travel. Sometimes these are interesting, sometimes they aren't. Frequently it's not convenient for me to stop, but I am curious about what happened.</p>
                
                <p>With this app installed on your phone, the app will keep track of your geo-location using the phone's GPS, and as you approach a historical marker, it will read off the contents of the historical marker using the phones Text-To-Speech function.</p>

                <p>This app remains a proof-of-concept because I am unsure of copyright regarding some of the information I'm sourcing from the web. There wasn't an existing database for this, so I'm using a webscraper to pull information from a website I do not own. I do not believe it's ethical to release an app, even if it's freeware without either gaining ownership of the information, or collaborating with the owner of the information. </p>

                <p>The major struggle in creating this app was working with Android Studio, which I never successfully got working on Linux (I had to use Windows), and learning Java from the ground up. I understand the Java language about as well as you would expect for someone who worked with it for 3 weeks, and I have a lot of cleanup I want to do on the code before I push things any further in terms of functionality.</p>
        </PortfolioPiece>

        <PortfolioPiece
            name="MichaelNewman.dev"
            frontendUrl="https://github.com/coloradohokie/eng-mgmt-tool-frontend"
            backendUrl="https://github.com/coloradohokie/eng-mgmt-tool-backend"
            website="https://engineering-project-manager.firebaseapp.com/"
            videoUrl=""
            date="June, 2020"
            languages="React.js, HTML, CSS">
               <p>This website has been created from scratch using React. I wanted a place where I could demonstrate my work so I bought this domain and published this site. I've avoided using 3rd pary UI components here (a self-imposed restriction) so I that I can be responsible for all the lines of code. This website is written in React and is hosted on Firebase. It is currently front-end only, alhtough I am considering adding a database API for content management. </p>
        </PortfolioPiece>

        <PortfolioPiece
            name="Burger Builder"
            frontendUrl="https://github.com/coloradohokie/eng-mgmt-tool-frontend"
            backendUrl="https://github.com/coloradohokie/eng-mgmt-tool-backend"
            website="https://engineering-project-manager.firebaseapp.com/"
            videoUrl=""
            date="May, 2020"
            languages="React.js, HTML, CSS, NoSQL">
               <p>I built this app while studying a very good Udemy course on React. I feel it important to disclose that this is not my design, and there were tutorials provided for writing this code. This is a feature-rich app which allows the user to build a burger and order it. It has authentication and shows the history of the orders. It has a very good data validation system and makes use of Redux at what I consider to be a complex level. </p>

               <p>In addition to Redux, I learned a lot about content organization for feature-rich projects, using modular CSS (which I LOVE!), and effective state management.</p>
        </PortfolioPiece>

        <PortfolioPiece
            name="Let's Ride!"
            frontendUrl="https://github.com/coloradohokie/eng-mgmt-tool-frontend"
            backendUrl="https://github.com/coloradohokie/eng-mgmt-tool-backend"
            website="https://engineering-project-manager.firebaseapp.com/"
            videoUrl=""
            date="February, 2020"
            languages="Javascript, HTML, CSS, Ruby">
                <p>This is my first full stack app, created in collaboration with Doug Johnson. The idea behind this app was to create a social page for people who like to go on motorcycle rides. Users can shchedule new rides, RSVP to upcoming rides, and view and share photos of past rides.</p>

                <p>This app was created using vanilla Javascript with a Ruby backend. As it was my first full stack app, it will forever hold a special place in my heart.</p>
        </PortfolioPiece>

        <PortfolioPiece
            name="Motorcycle Route Finder"
            frontendUrl="https://github.com/coloradohokie/eng-mgmt-tool-frontend"
            backendUrl="https://github.com/coloradohokie/eng-mgmt-tool-backend"
            website="https://engineering-project-manager.firebaseapp.com/"
            videoUrl=""
            date="February, 2020"
            languages="Javascript, HTML, CSS, Ruby">
               <p>This was a proof of concept app that I created to build on the Let's Ride App. The idea was that you could pick a start location and an end location and instead of finding the most direct way there, the system would return the most fun way there. I tried to use the Google Maps API to accomplish this, but it is optimized for efficiency and has no real way of finding the "twistiest" road. About the best I could do was to tell it to avoid interestates.</p>

               <p>While I was unable to prove my concept, I was able to make a fairly nice app where users could document their routes with the idea of putting together a nice motorcycle ride. </p>
        </PortfolioPiece>


    </div>
)

export default portfolio