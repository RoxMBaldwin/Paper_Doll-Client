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
          <div className='hangerName'>
            <a>
              {name}
            </a>
          </div>
          <div className='outfitDay'>
            <p>append to schedule</p>
            <label>enter day </label>
            <input className='outfitDaytxt' type='text' />
          </div>
          <div className='hangerAddDel'>
            <button className='hangerButtons'>+</button>
            <button className='hangerminusButtons'>-</button>
          </div>
        </div>
      </div>
    </div>
  )
// }
}

export default Hanger;
