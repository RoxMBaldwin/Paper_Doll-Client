import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import {
  Link
} from 'react-router-dom'
import '../index.css';

const Closet = () => {
  return <div className='closet'>
  <Header></Header>
    <div className='redirectingLinks'>
      <Link to='/begin/'>Home</Link>
      <br/>
      <Link to='/outfits/'>Outfit Schedule</Link>
    </div>
    <h1> Closet </h1>
    <div className='body'>
      <div className='sidebar'>
        <input type='button' value='+ new'/>
        <input type='button' value='top'/>
        <input type='button' value='lower'/>
        <input type='button' value='one piece'/>
        <input type='button' value='shoes'/>
      </div>
      <div className='imageInfo'>
        <img src="https://s3-us-west-1.amazonaws.com/paper-doll/jeweledCapeDress.png" alt="test"/>
        <h2><em>Brand / name</em></h2>
      </div>
    </div>
  <Footer></Footer>
  </div>
};


export default Closet;
