import React from 'react';
// import ImageGallery from 'react-image-gallery';
import '../dest/style.css/styles.css';

const Mirror = ({
  setType,
  id,
  name,
  type,
  image }) => {
    console.log({name})
  return(
    <div className='mirrorGroup'>
      <a>
        <h4 className='mirrorName'>{name}</h4>
      </a>
      <div>
        <a>
          <img className='mirrorIMG' src={image} alt='test'/>
        </a>
      </div>
    </div>
 )
}

export default Mirror;
