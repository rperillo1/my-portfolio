import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import SpotifyCard from '../../components/SpotifyCard/SpotifyCard'
import TitleAnimations from '../../components/TitleAnimations/TitleAnimations'
import './ProfileCard.css'
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    borderRadius: 8,
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
          <TitleAnimations />
          <div className='flex-container'>
            <Link to="/projects" id='projects-link' className='title-font-2'> Check My Work </Link>
          </div>
        </div>
        <div id='middle'>
          <div className='flex-container'>
          <Paper elevation={3} className={classes.root}>
            <img src="https://i.imgur.com/Ptk7n58.png" alt="" className='profile-img' />
          </Paper>
          </div>
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
