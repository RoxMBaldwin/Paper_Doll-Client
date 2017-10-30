import React from 'react';
import ReactDOM from 'react-dom';
import './dest/style.css/styles.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Laundry } from './components/Laundry.js'
import { Build } from './components/Build.js'
import App from './App';
import Main from './components/Main.js'
import Closet from './components/Closet.js'
import { OutfitSchedule } from './components/OutfitSchedule'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'




ReactDOM.render(
  <Router>
    <div>
      <Header/>
      <Route exact path='/' component={App}/>
      <Route exact path='/begin/' component={Main}/>
      <Route path='/clothing/' component={Closet}/>
      <Route path='/laundry/' component={Laundry}/>
      <Route path='/outfits/' component={OutfitSchedule}/>
      <Route path='/build/' component={Build}/>
      <Footer/>
    </div>
  </Router>,
  document.getElementById('root'));
// registerServiceWorker();



//the router itself the / is the compont
