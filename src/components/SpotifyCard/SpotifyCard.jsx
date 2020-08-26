import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

const size = {
    width: '96%',
    height: 345,
    borderRadius: 25
};
const view = 'coverart';
const theme = 'black';

function SpotifyCard() {
    return (
        <>
        <section id='spotify'>
            <SpotifyPlayer
                uri="spotify:album:5XldWuEBAF997MYSEqKJzm"
                size={size}
                view={view}
                theme={theme}
            />
        </section>
        <div>
            <h1 className='title-font-4 flex-container'>Tools:</h1>
            <div className='flex-container tools'>
                <img src='https://i.imgur.com/r3fhAZE.png' id='ableton'></img>
                <img src='https://i.imgur.com/b37z9xj.png' id='protools'></img>
                <img src='https://i.imgur.com/UVLqdxT.png' id='audacity'></img>
                <img src='https://i.imgur.com/Z7awRul.png'></img>
            </div>
        </div>
        </>
    )
}

export default SpotifyCard;