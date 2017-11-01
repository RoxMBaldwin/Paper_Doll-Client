import React from 'react';
import Hanger from './Hanger.js'
import Mirror from './Mirror.js'
import { Laundry } from './Laundry.js'
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
      postingClothing: false,
      storeItems: []
    }
  }

  // storeItems =


  handleType = (e) => {
    const typeClicked = e.target.value
    this.setState({setType : typeClicked})
  }

  postName = (body) => {
    //console.log(body);
    const settings = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    fetch(`${baseURL}/clothing/`, settings)
    .then(response => {
      if (response.ok){
        this.setState({
          ...this.state,
          postingClothing : false})
          window.location.reload()
      }
    })
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
      <div className='sidebar'>
        <div className='types'>
          <input id='top' className='closetButton' type='button' value='top' onClick={this.handleType}/>
          <input id='lower' className='closetButton' type='button' value='lower' onClick={this.handleType}/>
          <input id='one-piece' className='closetButton' type='button' value='one-piece'onClick={this.handleType}/>
          <input id='shoes' className='closetButton' type='button' value='shoes'onClick={this.handleType}/>
          <div className='addNew'>
            {this.state.postingClothing ? <Laundry postName={this.postName}/> : <button onClick={this.togglePosting} className='addNewButton'> + </button>}
          </div>
        </div>
      </div>
      <div className='body'>
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
