import React from 'react';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import {
  Link
} from 'react-router-dom'
import '../index.css';

export class OutfitSchedule extends React.Component {
  render(){
    return <div className='schedule'>
    <Header></Header>
    <div className='redirectingLinks'>
      <Link to='/clothing/'>Closet</Link>
      <br/>
      <Link to='/begin/'>Home</Link>
    </div>
    <div className='dummyCalendar'>
      <h3> Outfit Schedule </h3>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <hr/>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
    </div>
    <Footer></Footer>
  </div>
  };
}
