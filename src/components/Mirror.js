import React from 'react';
import '../index.css';

const Mirror = ({ name, image, type }) => {
  return(
    <div>
      <a>
        {name}
      </a>
      <a>
        {image}
      </a>
      <a>
        {type}
      </a>
    </div>
  )
}

export default Mirror;
