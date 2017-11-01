import React from 'react';
import '../dest/style.css/styles.css';

export class Build extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name:'',
      typeOf: '',
      image: ''
    }
  }

  handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    this.setState({
      ...this.state,
      [key]: value
    })

    console.log(this.state);
  }

  render(){
    return (
      <div className='sunday'>
          <div className='lowerImg'>
          <ul>
          <li>
            <a>
              <img src='https://s3-us-west-1.amazonaws.com/paper-doll/sourPuss.png' alt='top'/>
            </a>
            </li>
            <li>
            <a>
              <img className='quadtop' src='https://s3-us-west-1.amazonaws.com/paper-doll/QuadBloxNeutral.png' alt='top'/>
            </a>
            </li>
            </ul>
        </div>
      </div>
    )
  };
}
