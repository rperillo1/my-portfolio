import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import TweenOne from 'rc-tween-one';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import useToggle from '../../hooks/useToggle'
import Animation from '../../components/Animation/Animation'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import HomePage from '../About/About'
import './App.css';
TweenOne.plugins.push(SvgMorphPlugin);


function App() {
  const [isLoaded, toggleIsLoaded] = useToggle(false)


  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      const loading = setTimeout(function () {
        toggleIsLoaded();
      }, 1500);
      return () => clearTimeout(loading)
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [])


  return (
    <>
      {isLoaded ?
        <>
          <div id='App'>
            <nav className='nav'>
              <Nav />
            </nav>
            <main className='main'>
              <Switch>
                <Route exact path='/' render={({ history }) =>
                  <HomePage history={history} />
                } />
                <Route exact path='/projects' render={({ history }) =>
                  <Projects history={history} />
                } />
                <Route exact path='/resume' render={({ history }) =>
                  <Resume history={history} />
                } />
                <Route render={({ history }) =>
                  <HomePage history={history} />
                } />
              </Switch>
            </main>
            <footer className='footer'>
              <Footer />
            </footer>
          </div>
        </>
        :
        <Animation />
      }
    </>
  );
}

export default App;
