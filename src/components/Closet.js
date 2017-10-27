import React from 'react';
// import Mirror from './Mirror.js'
import Hanger from './Hanger.js'
import {
  Link
} from 'react-router-dom'
import '../index.css';

const baseURL = 'https://damp-escarpment-70250.herokuapp.com'

class Closet extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      clothing:[],
      setType: ''
    }
  }

  handleType = (e) => {
    const typeClicked = e.target.value
    this.setState({setType: typeClicked})
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
    const clothingBytype = this.state.clothing.filter((piece) => {
      console.log(this.state.setType, piece)
      if(this.state.setType === ''){
        return true
      } else if(piece.typeOf === this.state.setType){
        return true
      } else {
        return false
      }
    })
    return (
    <div className='closet'>
      <h1> Closet </h1>
      <div className='body'>
        <div className='sidebar'>
          <Link to='/laundry/'>Add new</Link>
          <input id='top' type='button' value='top' onClick={this.handleType}/>
          <input id='lower' type='button' value='lower' onClick={this.handleType}/>
          <input id='one-piece' type='button' value='one-piece'onClick={this.handleType}/>
          <input id='shoes'type='button' value='shoes'onClick={this.handleType}/>
        </div>
        <div className='mainClosetBody'>
          <div className='MirrorCOMP'>
            <a><img src='https://s3-us-west-1.amazonaws.com/paper-doll/TUKwoodiePlatforms.png' alt='test'/></a>
          </div>
          <div>
            { clothingBytype.map(piece => (
              <Hanger id = { piece.id }
                      key = { piece.id }
                      name = { piece.name }
                      type = { piece.typeOf }
                      image = { piece.image }/>))}
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Closet
