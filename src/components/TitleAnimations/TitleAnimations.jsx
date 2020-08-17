import React from 'react';
import Grow from '@material-ui/core/Grow';

function TitleAnimations() {
    return (
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
                <h1 className="flex-container title-font-4" id='title-header'>  &nbsp;&nbsp; Audio Engineer </h1>
            </Grow>
            <Grow
                in={true}
                {...(true ? { timeout: 4500 } : {})}
            >
                <h1 className="flex-container title-font-4" id='title-header'>  &nbsp;&nbsp; Outdoor Enthusiast</h1>
            </Grow>
        </div>
    )
}

export default TitleAnimations;