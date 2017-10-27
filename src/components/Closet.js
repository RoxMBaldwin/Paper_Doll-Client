import React from 'react';
import Mirror from './Mirror.js'
import {
  Link
} from 'react-router-dom'
import '../index.css';

const baseURL = 'https://damp-escarpment-70250.herokuapp.com'

class Closet extends React.Component {

  constructor(props){
    super(props)
    this.state = {clothing:[]}
    // this.state = {outfits:[]}
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
    <div className='closet'>
      <h1> Closet </h1>
      <div className='body'>
        <div className='sidebar'>
          <Link to='/laundry/'>Add new</Link>
          <input type='button' value='top'/>
          <input type='button' value='lower'/>
          <input type='button' value='one piece'/>
          <input type='button' value='shoes'/>
        </div>
        <div>
          { this.state.clothing.map(piece => (
            <Mirror key = { piece.id }
                    name = { piece.name }
                  
          />))}
        </div>
      </div>
    </div>
    )
  }
}
export default Closet
