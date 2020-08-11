import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import TweenOne from 'rc-tween-one';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import Nav from '../../components/Nav/Nav'
import useToggle from '../../hooks/useToggle'
import Animation from '../../components/Animation/Animation'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import Profile from '../Profile/Profile'
import './App.css';
TweenOne.plugins.push(SvgMorphPlugin);


function App() {
  const [isLoaded, toggleIsLoaded] = useToggle(false)


  useEffect(() => {
    const loading = setTimeout(function () {
      toggleIsLoaded();
    }, 1200);
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
            <Switch>
              <Route exact path='/projects' render={({ history }) =>
                <Projects history={history} />
              } />
              <Route exact path='/resume' render={({ history }) =>
                <Resume history={history} />
              } />
              <Route exact path='/profile' render={({ history }) =>
                <Profile history={history} />
              } />

            </Switch>
          </main>
        </>
        :
        <Animation />
      }
    </>
  );
}

export default App;