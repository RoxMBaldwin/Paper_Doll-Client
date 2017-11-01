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
        <div>
          <Link to='/'>Log out</Link>
        </div>
      </div>
    </body>
    )
  }
}
export default Main;
