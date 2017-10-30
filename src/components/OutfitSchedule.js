import React from 'react';
import '../dest/style.css/styles.css';

const baseURL = 'https://damp-escarpment-70250.herokuapp.com'

export class OutfitSchedule extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      clothing:[],
      setType: '',
      viewImage: []
    }
  }

  async componentDidMount() {
   const data = await fetch(`${baseURL}/clothing/`)
   const response = await data.json()
   this.setState({clothing: response})
   console.log(response);
  //  this.setState({outfits:})
  }

  render(){
    return (
  <div className='schedule'>
    <div className='dummyCalendar'>
      <div className='subHeader'>
        <h3> Outfit Schedule </h3>
      </div>
      <div className='week1'>
        <div className='firstWeek'>1</div>
        <div className='firstWeek'>2</div>
        <div className='firstWeek'>3</div>
        <div className='firstWeek'>4</div>
        <div className='firstWeek'>5</div>
        <div className='firstWeek'>6</div>
        <div className='firstWeek'>7</div>
      </div>
      <hr/>
      <div className='week2'>
        <div className='secondWeek'>8</div>
        <div className='secondWeek'>9</div>
        <div className='secondWeek'>10</div>
        <div className='secondWeek'>11</div>
        <div className='secondWeek'>12</div>
        <div className='secondWeek'>13</div>
        <div className='secondWeek'>14</div>
      </div>
    </div>
  </div>
  )
  };
}
