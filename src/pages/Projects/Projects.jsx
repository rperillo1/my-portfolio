import React from 'react';
import './Projects.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Paper from '@material-ui/core/Paper';



const projectInfo = [
    {
        title: 'D&D Character Manager',
        desc: 'Track your character stats, spells, abilities, money and more! Pulls spell data from the D&D 5e Players Handbook API',
        images: ['https://i.imgur.com/HhC4id5.png', 'https://i.imgur.com/UV8TLtf.png', 'https://i.imgur.com/ym0NygY.png', 'https://i.imgur.com/JMPTHyI.png'],
        logos: ['https://i.imgur.com/hWrPRuJ.png', 'https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/GMHSzcr.png'],
        appLink: 'https://dandd-character-manager.herokuapp.com/',
        githubLink: 'https://github.com/rperillo1/DandD-character-manager'
    },
    {
        title: 'Job Search Tracker (JST)',
        desc: 'Track job application notes, company information, interest levels and associated interviews. Uses GitHubs jobs API to pull relevant job info.',
        images: ['https://i.imgur.com/dLMfXWT.png', 'https://i.imgur.com/ea0gWwf.png', 'https://i.imgur.com/ckx6qYS.png', 'https://i.imgur.com/XndUofw.png'],
        logos: ['https://i.imgur.com/a6uI0Vs.png', 'https://i.imgur.com/IGsHeNw.png', 'https://i.imgur.com/znLwmfG.png', 'https://i.imgur.com/6xfuexp.png', 'https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/UHCbPD3.png'],
        appLink: 'https://job-search-trackr.herokuapp.com/',
        githubLink: 'https://github.com/rperillo1/Job-Search-Tracker'
    },
    {
        title: 'Gaming Time - a scheduling app',
        desc: 'Sign up via google OAuth. Create friend groups and games within those groups. Then create polls of dates for your group members to vote on! Uses the Google Calendar API so that you can post an event date that was chosen by your friends.',
        images: ['https://i.imgur.com/MOgIOuX.png', 'https://i.imgur.com/mXwEbla.png', 'https://i.imgur.com/2Df5gPe.png', 'https://i.imgur.com/cESnvUk.png'],
        logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/aajFadH.png'],
        appLink: 'https://game-time-scheduler.herokuapp.com/home',
        githubLink: 'https://github.com/rperillo1/Gaming-Scheduler'
    },
    {
        title: 'The Goodest Doggo',
        desc: 'A virtual dog show app. Allows you to sign in via google OAuth, create a dog profile to add your dog to competitions for users to vote.',
        images: ['https://i.imgur.com/DkOcPNV.jpg', 'https://i.imgur.com/OiRb12d.jpg', 'https://i.imgur.com/WLYctaG.jpg', 'https://i.imgur.com/KDsBMX6.png'],
        logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/EnsYkPa.png'],
        appLink: 'https://the-goodest-doggo.herokuapp.com/home',
        githubLink: 'https://github.com/rperillo1/The-Goodest-Doggo'
    },
    {
        title: 'Field of Battle',
        desc: 'Single Player RPG. Create your character, choose a set of skills, and go adventure. If you get through the forest and mountains and beat all the creatures before you lose all your life - YOU WIN! ',
        images: ['https://i.imgur.com/ICISstu.png', 'https://i.imgur.com/GqnHcq6.png', 'https://i.imgur.com/oVv2kFq.png', 'https://i.imgur.com/Jnxg7OG.png', 'https://i.imgur.com/JM7Jjso.png', 'https://i.imgur.com/IutcTxe.png'],
        logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/EnsYkPa.png'],
        appLink: 'https://rperillo1.github.io/The-Field-of-Battle/',
        githubLink: 'https://github.com/rperillo1/The-Field-of-Battle'
    },
    {
        title: 'Neon Jungle Slots',
        desc: 'Mobile friendly slot machine. Thematic and click responsive sounds to fit the game.',
        images: ['https://i.imgur.com/UHglaq9.png'],
        logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/EnsYkPa.png'],
        appLink: 'https://rperillo1.github.io/Slot-Machine/',
        githubLink: 'https://github.com/rperillo1/Slot-Machine'
    },
]

function Projects() {

    return (
        <div id='project-main'>
            {projectInfo.map((project, idx) =>
            <div className='project' id={idx % 2 === 0 ? 'left' : 'right'}>
                <div className='carousel' >
                    <h1 id='title' className='title-font-4'>{project.title}</h1>
                    <div>
                        <Carousel autoPlay={true} infiniteLoop showIndicators emulateTouch>
                            {project.images.map(image =>
                                <div>
                                    <img src={image} />
                                </div>
                            )}
                        </Carousel>
                    </div>
                    <Paper elevation={4} className='paper-desc text-font'>
                    <p>{project.desc}</p>
                    </Paper>
                </div>
                <Paper elevation={4} className='paper-logos'>
                    { project.logos.map(logo =>
                            <img src={logo} className='logo'></img>
                    )}
                </Paper>    
            </div>
            )}
        </div>
    )
}

export default Projects;


