import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
      <section id='top'>
        <h1 className="flex-container">Full Stack Developer | Audio Engineer | Outdoor Enthusiast</h1>
        <div className='flex-container'>
          <Paper elevation={3} className={`${classes.img} flex-container`}>
            <img src="https://i.imgur.com/PYQb76j.png" alt="Robert snowboarding at Winter Park" id='snowboard-img' />
          </Paper>
        </div>
      </section >
      <section id='middle'>
        <div className='flex-container'>
          <Paper elevation={3} className={classes.root}>
            <img src="https://i.imgur.com/Ptk7n58.png" alt="" className='profile-img' />
          </Paper>
          &nbsp;&nbsp;&nbsp;&nbsp;
        <div className='flex-container'>
          <Paper elevation={3} className={`${classes.root} profile-text`}>
            <div>
              Audio Engineer turned Software Developer.
              Through project experiences using JavaScript, Node, Express, React, RESTful APIs, HTML and CSS, I have developed a zeal for building efficient web applications.
              I thrive on constructive criticism and value empathy, accountability and transparency in a workplace.
              I work well in team environments and respect the time that people give to me to further my knowledge base.
              As a side gig, I create music, work with sound design and geek out on all things audio!
            </div>
          </Paper>
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