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
      <div className='build'>
        <div>
          <h1>build new outfit</h1>
        </div>
      </div>
    )
  };
}
