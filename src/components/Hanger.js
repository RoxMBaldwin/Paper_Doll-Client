import React from 'react';
import '../index.css';

const Hanger = ({
  id,
  name,
  image,
  type
}) => {
  // if ( type === typeClicked){
  return(
    <div>
      <a>
        {name}
      </a>
      <a>
        {type}
      </a>
    </div>
  )
// }
}

export default Hanger;
