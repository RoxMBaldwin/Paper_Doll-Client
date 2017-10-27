import React from 'react';
import '../index.css';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Closet } from './Closet.js';
import {
  Link
} from 'react-router-dom'

const baseURL = 'https://damp-escarpment-70250.herokuapp.com'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {clothing:[]}
    // this.state = {outfits:[]}
  }

  toggleCloset(){
    this.setState({ closetizing : !this.state.closetizing })
  }

  async componentDidMount() {
   const data = await fetch(`${baseURL}/clothing/`)
   const response = await data.json()
   console.log(response);
    this.setState({clothing: response})
  //  this.setState({outfits:})
  // console.log({clothing})

 }

render(){
 return (
    <div className='home'>
      <Header></Header>
      <input type='button' value='Closet' onClick={() => this.toggleCloset()}/>
      {this.state.closetizing ? <Closet /> : null }
      <div>
        <Link to='/'>Log out</Link>
      </div>
      <Footer></Footer>
    </div>
    )
  }
}
export default Main;
