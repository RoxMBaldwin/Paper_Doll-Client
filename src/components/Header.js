import React from 'react';
import Logo from '../assets/paperdollLogo.png';
import {
  Link
} from 'react-router-dom'
import '../dest/style.css/styles.css';


export class Header extends React.Component {
  render(){
    return (
      <nav className='navBar'>
        <div className='container'>
          <div className='logo'>
            <a>
              <img src={Logo} alt='Paper Doll'/>
            </a>
          </div>
          <div className='headerNavBar'>
            <ul className='navBarnav'>
                <Link className='navLinks' to='/begin/'>Home</Link>
                <Link className='navLinks' to='/clothing/'>Closet</Link>
                <Link className='navLinks' to='/outfits/'>Outfit Schedule</Link>
            </ul>
          </div>
        </div>
      </nav>
    )
  };
}
