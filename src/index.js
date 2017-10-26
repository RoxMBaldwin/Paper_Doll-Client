import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Laundry } from './components/Laundry.js'
import { Build } from './components/Build.js'
import App from './App';
import { Main } from './components/Main.js'
import { Closet } from './components/Closet.js'
import { OutfitSchedule } from './components/OutfitSchedule'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App}/>
      <Route exact path='/begin/' component={Main}/>
      <Route path='/clothing/' component={Closet}/>
      <Route path='/laundry/' component={Laundry}/>
      <Route path='/outfits/' component={OutfitSchedule}/>
      <Route path='/build/' component={Build}/>
    </div>
  </Router>,
  document.getElementById('root'));
// registerServiceWorker();



//the router itself the / is the compont
