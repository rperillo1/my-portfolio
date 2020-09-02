import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './pages/App/App';
import ScrollToTop from 'react-router-scroll-top'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      {/* <ScrollToTop> */}
      <Route render={({ history }) => <App history={history} />}/>
      {/* </ScrollToTop> */}
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();
