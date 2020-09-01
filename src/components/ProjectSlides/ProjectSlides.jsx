import React, { useEffect } from "react";
import './ProjectSlides.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import useToggle from '../../hooks/useToggle'
import { v4 as uuidv4 } from 'uuid';


const projectImages = [
    {
        laptopImg: 'https://i.imgur.com/aFXN6ZW.png',
        mobileImg: 'https://i.imgur.com/AEZyr7b.png',
        desc: 'D&D Character Manager. Track your character stats, spells, abilities, money and more! Technologies: Node, Express, React, MongoDB, HTML, CSS, Bootstrap, D&D 5e Players Handbook API',
        id: uuidv4()
    },
    {
        laptopImg: 'https://i.imgur.com/cSkIKGT.png',
        mobileImg: 'https://i.imgur.com/X4MSt5Y.png',
        desc: 'Job Search Tracker! Track job application notes, company information, interest levels. Technologies: Python, Django, PostgreSQL, VueJs, Github Jobs API, HTML, CSS',
        id: uuidv4()
    },
    {
        laptopImg: 'https://i.imgur.com/moxIop7.png',
        mobileImg: 'https://i.imgur.com/aOpRNab.png',
        desc: 'A gaming scheduling app. Sign up via google OAuth. Create friend groups and games within those groups. Then create polls of dates for your group members to vote on! Technologies: Express, Node, Mongoose, MongoDB, EJS, HTML, CSS, Materialize, Google Calendar API',
        id: uuidv4()
    },
    {
        laptopImg: 'https://i.imgur.com/1Noyanj.png',
        mobileImg: 'https://i.imgur.com/YOTeiCy.png',
        desc: 'Mobile responsive slot machine made with vanilla JavaScript, HTML & CSS',
        id: uuidv4()
    },
    {
        laptopImg: 'https://i.imgur.com/HrcV3nI.png',
        mobileImg: null,
        desc: 'A virtual dog show app. Allows you to sign in via google OAuth, create a dog profile yout dog to competitions for people to vote. Technologies: Express, Node, EJS templates, Javascript, Mongoose, MongoDB, HTML, CSS ',
        id: uuidv4()
    },
    {
        laptopImg: 'https://i.imgur.com/RpK5zxW.png',
        mobileImg: null,
        desc: 'Single Player RPG made with vanilla JavaScript, HTML, CSS (Grid, FLexbox, Bootstrap)',
        id: uuidv4()
    },
]


function ProjectSlides() {
    const [autoplay, toggleAutoplay] = useToggle(false)


    useEffect(() => {
        const loading = setTimeout(function () {
            toggleAutoplay();
        }, 7000);
        return () => clearTimeout(loading)
    }, [])

    return (
        <div className='flex-container'>
            <Carousel autoplay={true} infiniteLoop showIndicators emulateTouch stopOnHover={false}>
                {projectImages.map((step, index) => (
                    <div className="flex-container slider-container" key={step.id}>
                        <img src={step.laptopImg} alt={`project ${index}`} id='laptop-img'/>
                        {step.mobileImg === null ? null
                            : <img className='mobile-img' src={step.mobileImg} alt={`mobile project ${index}`} id='mobile-img' />}
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ProjectSlides;
