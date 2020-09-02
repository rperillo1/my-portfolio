import React from 'react';
import SpotifyCard from '../SpotifyCard/SpotifyCard'
import ProfileCard from '../ProfileCard/ProfileCard'
import TitleAnimations from '../TitleAnimations/TitleAnimations'
import ProjectSlides from '../ProjectSlides/ProjectSlides'
import CheckWorkButton from '../CheckWorkButton/CheckWorkButton'
import Logos from '../Logos/Logos'

import './AboutComponents.css'



export default function AboutComponents() {

  return (
    <>
      <section id='main-section'>
        <div id='top'>
          <TitleAnimations />
          <CheckWorkButton />
        </div>
        <div id='middle'>
          <ProfileCard />
        </div>
        <div id='middle-2'>
          <h2 className='flex-container title-font-4'>Technologies:</h2>
          <Logos />
        </div>
        <div id='bottom'>
          <div className='flex-container'>
            <h1 className='title-font-4 spotify-text'>My Album on Spotify:</h1>
          </div>
          <div>
            <SpotifyCard />
          </div>
        </div>
      </section>
    </>
  );
}
