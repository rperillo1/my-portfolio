import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

const size = {
    width: '100%',
    height: 300,
    borderRadius: 20
};
const view = 'coverart';
const theme = 'black';

function SpotifyCard() {
    return (
        <section id='spotify'>
                <SpotifyPlayer
                    uri="spotify:album:5XldWuEBAF997MYSEqKJzm"
                    size={size}
                    view={view}
                    theme={theme}
                />
        </section>
    )
}

export default SpotifyCard;