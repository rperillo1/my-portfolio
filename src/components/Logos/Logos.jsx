import React from 'react';
import './Logos.css'

function Logos() {
    return (
        <>
            <div className='logo-container'>
                <img src='/logos/react.png' alt='react logo'></img>
                <img src='/logos/html.png' alt='html, css, js logo'></img>
                <img src='/logos/node.png' alt='node logo'></img>
                <img src='/logos/express.png' alt='express logo'></img>
                <img src='/logos/mongo-2.png' alt='mongoDB logo'></img>
            </div>
            <div className='logo-container'>
                <img src='/logos/python.png' alt='python logo'></img>
                <img src='/logos/django.png' alt='django logo'></img>
                <img src='/logos/heroku.png' alt='heroku logo'></img>
                <img src='/logos/git6.png' alt='github logo'></img>
                <img src='/logos/postgresql.png' alt='postgresql logo'></img>
            </div>
            <div className='logo-container'>
                <img src='/logos/mongoose.png' alt='mongoose logo'></img>
                <img src='/logos/bootstrap.png' alt='bootstrap logo'></img>
                <img src='/logos/material-ui.png' alt='material-UI logo'></img>
                <img src='/logos/ui-kit.png' alt='UI kit logo'></img>
            </div>
        </>
    )
}


export default Logos;