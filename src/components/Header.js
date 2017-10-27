import React from 'react';
import {
  Link
} from 'react-router-dom'
import '../index.css';


export class Header extends React.Component {
  render(){
    return (
      <nav className='navBar'>
        <div className='container'>
          <div className='logo'>
            <h2>LOGO</h2>
          </div>
          <div className='headerNavBar'>
            <ul className='navBarnav'>
                <Link to='/begin/'>Home</Link>
                <Link to='/clothing/'>Closet</Link>
                <Link to='/outfits/'>Outfit Schedule</Link>
            </ul>
          </div>
        </div>
      </nav>
    )
  };
}
