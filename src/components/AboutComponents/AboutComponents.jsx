import React from 'react';
import { Link } from 'react-router-dom'
import SpotifyCard from '../SpotifyCard/SpotifyCard'
import ProfileCard from '../ProfileCard/ProfileCard'
import TitleAnimations from '../TitleAnimations/TitleAnimations'
import ProjectSlides from '../ProjectSlides/ProjectSlides'
import CheckWorkButton from '../CheckWorkButton/CheckWorkButton'
import './AboutComponents.css'



export default function AboutComponents() {

  return (
    <>
      <section id='main-section'>
        <div id='top'>
          <TitleAnimations />
          <CheckWorkButton />
          {/* <div className='flex-container'>
            <Link to="/projects" id='projects-link' className='title-font-2'> Check My Work </Link>
          </div> */}
        </div>
        <div id='middle'>
          <ProfileCard />
        </div>
        <div id='middle-2'>
          <h2 className='flex-container title-font-4'>Sample Work:</h2>
          <ProjectSlides />
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
