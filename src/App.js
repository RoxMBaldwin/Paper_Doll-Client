import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import './App.css';

//const baseURL = 'https://damp-escarpment-70250.herokuapp.com'

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {clothing:[]}
  //   // this.state = {outfits:[]}
  // }
  //
  // async componentDidMount() {
  //  const data = await fetch(`${baseURL}/clothing/`)
  //  const response = await data.json()
  //  console.log(response)
  //  this.setState({clothing: response})
  // //  this.setState({outfits:})
  // }

  render() {
    return (
      <div className='application'>
        <h1 className='logo'>Paper Doll</h1>
        <div className='links'>
          <Link to='/begin/'>Login</Link>
        </div>
      </div>
    );
  }
}

export default App;
