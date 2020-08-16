import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import SpotifyCard from '../../components/SpotifyCard/SpotifyCard'
import './ProfileCard.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    borderRadius: 8
  },
  img: {
    width: 920,
    borderRadius: 20,
    height: 400,
  },
});


export default function ProfileCard() {
  const classes = useStyles();

  return (
    <>
      <section id='main-section'>
        <div id='top'>
          <div className='flex-container'>
            <Grow
              in={true}
              {...(true ? { timeout: 2000 } : {})}
            >
              <h1 className="flex-container title-font-4" id='title-header'>Full Stack Developer </h1>
            </Grow>
            <Grow
              in={true}
              {...(true ? { timeout: 3200 } : {})}
            >
              <h1 className="flex-container title-font-4" id='title-header'> | &nbsp;&nbsp; Audio Engineer </h1>
            </Grow>
            <Grow
              in={true}
              {...(true ? { timeout: 4500 } : {})}
            >
              <h1 className="flex-container title-font-4" id='title-header'> | &nbsp;&nbsp; Outdoor Enthusiast</h1>
            </Grow>
          </div>
          <div className='flex-container'>
            <Link to="/projects" id='projects-link' className='title-font-2'> Check My Work </Link>
          </div>
        </div>
        <div id='middle' className='flex-container'>
          <Paper elevation={3} className={classes.root}>
            <img src="https://i.imgur.com/Ptk7n58.png" alt="" className='profile-img' />
          </Paper>
          &nbsp;&nbsp;&nbsp;&nbsp;
        <div className='flex-container'>
            <Paper elevation={3} className={`${classes.root} profile-text`}>
              <div className='text-font'>
                Audio Engineer turned Software Developer.
                Through project experience using JavaScript, Node, Express, React, RESTful APIs, HTML and CSS, I have developed a zeal for building efficient web applications.
                I thrive on constructive criticism and value empathy, accountability and transparency in a workplace.
                I work well in team environments and respect the time that people give to me to further my knowledge base.
                As a side gig, I create music, work with sound design and geek out on all things audio!
            </div>
            </Paper>
          </div>
        </div>
        <div id='bottom'>
          <div className='flex-container title-font-4 spotify-text'>
            <h1>My Album on Spotify:</h1>
          </div>
          <div className='flex-container'>
            <SpotifyCard />
          </div>
        </div>
      </section>
    </>
  );
}

// Mechanical engineer turned ambitious full stack web developer located in Denver, Colorado. 
// Through project experiences using Ruby on Rails, JavaScript, React, RESTful APIs, HTML, and CSS, 
// I have developed a zeal for discovering new ways of connecting people, sharing ideas, and advancing culture through modern web development. 
// I love the intersection of creativity and analytical problem solving involved in creating applications. 
// I am passionate about electronic music and am learning music production on Ableton in my free time.