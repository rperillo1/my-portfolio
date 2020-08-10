import React, { useEffect } from 'react';
import TweenOne from 'rc-tween-one';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import Nav from '../Nav/Nav'
import useToggle from '../../hooks/useToggle'
import Animation from '../Animation/Animation'
import './App.css';
TweenOne.plugins.push(SvgMorphPlugin);


function App() {
  const [isLoaded, toggleIsLoaded] = useToggle(false)


  useEffect(() => {
    const loading = setTimeout(function () {
      toggleIsLoaded();
    }, 2000);
    return () => clearTimeout(loading)
  }, [])


  return (
    <>
      {isLoaded ?
        <>
        <header>
          <Nav />
        </header>
        <main>

        </main>
        </>
        :
        <Animation />
      }
    </>
  );
}

export default App;
