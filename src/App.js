import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import './dest/style.css/styles.css';

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
        <div className='Auth'>
          <div className='loginLogo'>
            <h1>Paper Doll</h1>
          </div>
          <div className='login'>
            <label>username:</label>
            <br/>
            <input className='FAKE' type='text'/>
            <br/>
            <label>password:</label>
            <br/>
            <input className='FAKE'type='password'/>
          </div>
          <div className='link'>
            <Link to='/begin/'>login</Link>
          </div>
        </div>
        <div className='signup'>
          <button className='signupButton'>sign up</button>
        </div>
      </div>
    );
  }
}

export default App;
