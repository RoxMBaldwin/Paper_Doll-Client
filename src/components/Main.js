import React from 'react';
import '../index.css';
import { Header } from './Header.js';
import { Footer }from './Footer.js';
import {
  Link
} from 'react-router-dom'


export class Main extends React.Component {
  render(){
    return <div className='home'>
    <Header></Header>
    <div className='redirectingLinks'>
      <Link to='/clothing/'>Closet</Link>
      <br/>
      <Link to='/outfits/'>Outfit Schedule</Link>
    </div>
    <h1> Main </h1>
    <div>
      <Link to='/'>Log out</Link>
    </div>
    <Footer></Footer>
  </div>
  };
}
