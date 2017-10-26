import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './components/Main.js'
import Closet from './components/Closet.js'
import OutfitSchedule from './components/OutfitSchedule'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App}/>
      <Route exact path='/begin/' component={Main}/>
      <Route path='/clothing/' component={Closet}/>
      <Route path='/outfits/' component={OutfitSchedule}/>
    </div>
  </Router>,
  document.getElementById('root'));
// registerServiceWorker();



//the router itself the / is the compont
