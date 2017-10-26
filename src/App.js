import React, { Component } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {
  Link
} from 'react-router-dom'
import './App.css';

class App extends Component {

  // state = {
  //   closet: null
  // }
  //
  // componentDidMount() {
  //   fetch('https://damp-escarpment-70250.herokuapp.com/clothing/')
  //     .then(response => response.json())
  //     .then(closet => {
  //       this.setState({ closet })
  //     })
  // }

  render() {
    return (
      <div className='application'>
      <Header></Header>
        <h1 className='logo'>Paper Doll</h1>
        <div className='links'>
          <Link to='/begin/'>Login</Link>
        </div>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;

//actually putting th estuff on the page; link to the url
