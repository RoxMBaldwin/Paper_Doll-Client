import React from 'react';
import '../dest/style.css/styles.css';

export class Laundry extends React.Component {

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
    <div className='laundry'>
      <h3 className='addNewH3'>ADD NEW:</h3>
      <div className='fresh'>
        <div className='freshInputs'>
          <label>Name:</label>
          <br/>
          <input value={this.state.name} onChange={this.handleChange} name='name' type="text"/>
        </div>
        <div className='freshInputs'>
          <label>Type Of Clothing:</label>
          <br/>
          <input value={this.state.typeOf} onChange={this.handleChange} name='typeOf' type="text"/>
        </div>
        <div className='freshInputs'>
          <label>Image:</label>
          <br/>
          <input value={this.state.image} onChange={this.handleChange} name='image' type="file" accept="image/*;capture=camera"/>
        </div>
      </div>
      <div className='saveNewButton'>
        <button className='saveNew' onClick={this.props.postName.bind(null, {
                  name: this.state.name,
                  typeOf: this.state.typeOf,
                  image: this.state.image}
                )}>save</button>
      </div>
    </div>
  )
  };
}
