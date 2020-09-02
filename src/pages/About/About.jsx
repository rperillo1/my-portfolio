import React, { useEffect } from 'react';
import AboutComponents from '../../components/AboutComponents/AboutComponents'


function HomePage() {

    useEffect(() => {
        try {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } catch (error) {
          window.scrollTo(0, 0);
        }
      }, []);

    return (
        <>
        <main id='profile-main'>
            <AboutComponents />
        </main>
        </>
    )
}

export default HomePage;
