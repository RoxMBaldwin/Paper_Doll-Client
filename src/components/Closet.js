import React from 'react';
import Hanger from './Hanger.js'
import Mirror from './Mirror.js'
import { Laundry } from './Laundry.js'
import {
  Link
} from 'react-router-dom'
import '../dest/style.css/styles.css';

const baseURL = 'https://damp-escarpment-70250.herokuapp.com'

class Closet extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      clothing:[],
      setType: '',
      viewImage: [],
      postBody: [],
      postingClothing: false
    }
  }


  handleType = (e) => {
    const typeClicked = e.target.value
    this.setState({setType : typeClicked})
  }

  postName = (body) => {
    console.log(body);


    this.setState({
      ...this.state,
      postingClothing : false})
  }

  togglePosting = () => {
    this.setState({
      ...this.state,
      postingClothing: true
    })
  }

  async componentDidMount() {
   const data = await fetch(`${baseURL}/clothing/`)
   const response = await data.json()
   this.setState({clothing: response})
   //console.log(response);
  //  this.setState({outfits:})
  }

  render(){
    const clothingBytype = this.state.clothing.filter((piece) => {
      //console.log(this.state.setType, piece)
      if(this.state.setType === ''){
        return false
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
          {this.state.postingClothing ? <Laundry postName={this.postName}/> : <button onClick={this.togglePosting}>Test</button>}

          <input id='top' type='button' value='top' onClick={this.handleType}/>
          <input id='lower' type='button' value='lower' onClick={this.handleType}/>
          <input id='one-piece' type='button' value='one-piece'onClick={this.handleType}/>
          <input id='shoes'type='button' value='shoes'onClick={this.handleType}/>
        </div>
        <div className='closetView'>
          <div className='mainMirrorBody'>
            { clothingBytype.map(piece => (
              <Mirror id = { piece.id }
                      key = { piece.id }
                      name = { piece.name }
                      type = { piece.typeOf }
                      image = { piece.image }
                      viewImage
                      clothingBytype/>))}
          </div>
          <div >
            <div className='mainHangerBody'>
              { clothingBytype.map(piece => (
                <Hanger id = { piece.id }
                        key = { piece.id }
                        name = { piece.name }
                        type = { piece.typeOf }
                        image = { piece.image }
                        viewImage
                        clothingBytype/>))}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Closet
