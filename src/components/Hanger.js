import React from 'react';
import '../dest/style.css/styles.css';

const Hanger = ({
  id,
  name,
  image,
  type,
  clothingBytype
}) => {
  // console.log(type);
  console.log({image});
  // console.log({id});
  return(
    <div>
      <div className='hangerTypes'>
        <a>
          {name}
        </a>
      </div>
    </div>
  )
// }
}

export default Hanger;
