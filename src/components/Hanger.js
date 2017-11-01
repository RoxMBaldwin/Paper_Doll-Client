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
    <div className='hanger'>
    <div className='hangerTypes'>
      <div>
        <a>
          {name}
        </a>
      </div>
    </div>
    </div>
  )
// }
}

export default Hanger;
