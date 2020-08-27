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
import About from '../About/About'
import './App.css';
TweenOne.plugins.push(SvgMorphPlugin);


function App() {
  const [isLoaded, toggleIsLoaded] = useToggle(false)


  useEffect(() => {
    const loading = setTimeout(function () {
      toggleIsLoaded();
    }, 1500);
    return () => clearTimeout(loading)
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
                <Route exact path='/projects' render={({ history }) =>
                  <Projects history={history} />
                } />
                <Route exact path='/resume' render={({ history }) =>
                  <Resume history={history} />
                } />
                <Route exact path='/about' render={({ history }) =>
                  <About history={history} />
                } />
                <Route path='/' render={({ history }) =>
                  <About history={history} />
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
