import React, { useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-player';
import Animation from '../../components/Animation/Animation'
import useToggle from '../../hooks/useToggle'

const size = {
    width: '96%',
    height: 345,
    borderRadius: 25
};
const view = 'coverart';
const theme = 'black';

function SpotifyCard() {
    const [isLoaded, toggleIsLoaded] = useToggle(false)

    useEffect(() => {
        const loading = setTimeout(function () {
            toggleIsLoaded();
        }, 3500);
        return () => clearTimeout(loading)
    }, [])

    
    return (
        <>
            <section id='spotify'>
                {isLoaded ?
                    <SpotifyPlayer
                        uri="spotify:album:5XldWuEBAF997MYSEqKJzm"
                        size={size}
                        view={view}
                        theme={theme}
                    />
                    :
                    <Animation />
                }
            </section>
            <div>
                <h1 className='title-font-4 flex-container'>Tools:</h1>
                <div className='flex-container tools'>
                    <img src='/logos/ableton.png' alt='ableton logo' id='ableton'></img>
                    <img src='/logos/protools.png' alt='protools logo' id='protools'></img>
                    <img src='/logos/audacity.png' alt='audacity logo' id='audacity'></img>
                    <img src='/logos/akai.png' alt='akai logo'></img>
                </div>
            </div>
        </>
    )
}


export default SpotifyCard;