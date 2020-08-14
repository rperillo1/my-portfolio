import React from 'react';
import TweenOne from 'rc-tween-one';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
TweenOne.plugins.push(SvgMorphPlugin);


function Animation() {

    const animation = {
        d: 'M60,10L60,90L140,90L140,10Z',
        yoyo: true,
        repeat: -1,
        duration: 800,
    };

    return (
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
    )
}

export default Animation;