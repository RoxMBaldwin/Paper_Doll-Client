import React from 'react';
import '../dest/style.css/styles.css';
import {
  Link
} from 'react-router-dom'

class Main extends React.Component {

  render(){
    return (
    <body>
      <div className='home'>
      <div className='welcome'>
        <h1>welcome to Paper Doll</h1>
      </div>
      <div className='username'>
        <h2>space.legs</h2>
      </div>
      <div className='mainImage'>
        <a>
          <img src='http://ih0.redbubble.net/image.7749019.0160/sticker,375x360.png' alt='placeholder'/>
        </a>
      </div>
      <div className='instructions'>
        <p>organize your wardrobe and fashion outfits in Closet</p>
        <p>after building an outfit, store it in your Outfit Schedule</p>
        <p>cultivate and explore your individuality</p>
      </div>
        <div className='logout'>
          <Link to='/'>Log out</Link>
        </div>
      </div>
    </body>
    )
  }
}
export default Main;
