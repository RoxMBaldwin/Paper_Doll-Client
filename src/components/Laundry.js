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
      <h1>add new piece of clothing</h1>
      <input value={this.state.name} onChange={this.handleChange} name='name' type="text"/>
      <input value={this.state.typeOf} onChange={this.handleChange} name='typeOf' type="text"/>
      <input value={this.state.image} onChange={this.handleChange}name='image' type="text"/>
      <button onClick={this.props.postName.bind(null, {
            name: this.state.name,
            typeOf: this.state.typeOf,
            image: this.state.image})}/>
    </div>
  )
  };
}
