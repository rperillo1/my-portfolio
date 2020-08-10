import React, { useState, useEffect } from 'react';
import TweenOne from 'rc-tween-one';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import useToggle from '../../hooks/useToggle'
import Navbar from '../Navbar/Navbar'

TweenOne.plugins.push(SvgMorphPlugin);

function LandingPage() {
    const [isLoaded, toggleIsLoaded] = useToggle(false)

    const animation = {
        d: 'M60,10L60,90L140,90L140,10Z',
        yoyo: true,
        repeat: -1,
        duration: 1000,
    };

    useEffect(() => {
        const loading = setTimeout(function () {
            toggleIsLoaded();
        }, 100);
        return () => clearTimeout(loading)
    }, [])

    return (
        <>
            {isLoaded ?
                <>
                <Navbar />
                <h1>Landing Page</h1>
                </>
                :
                <div style={{ textAlign: 'center', marginTop: 40 }}>
                    <svg width="200" height="130" version="1.2"
                        style={{ display: 'block', margin: 'auto' }}
                    >
                        <TweenOne
                            animation={animation}
                            style={{ fill: 'magenta' }}
                            component="path"
                            d="M60,50 a40,40 0 1,0 80,0a40,40 0 1,0 -80,0z"
                            attr="attr"
                        />
                    </svg>
                </div>
            }
        </>
    )
}


export default LandingPage;