import React from 'react';
import { Build } from './Build.js'
import '../dest/style.css/styles.css';

const baseURL = 'https://damp-escarpment-70250.herokuapp.com'

export class OutfitSchedule extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      clothing:[],
      setType: '',
      valueOfOutfit: [],
      viewOutfit: false
    }
  }

  checkForValue = ({clothing}, {viewOutfit}) => {
    if({viewOutfit}){
      this.setState({valueOfOutfit : {
        name : clothing.name,
        type : clothing.typeOf,
        image : clothing.image
        }
      })
    } else {
      this.setState({valueOfOutfit : []})
    }
  }


  togglePosting = () => {
    this.setState({
      ...this.state,
      viewOutfit: true
    })
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
          <h1 className='subHeaderh1'> Outfit Schedule </h1>
        </div>
        <div className='weeks'>
          <section className='psuedoWeeks'>
            <div>
            <div className="nestedButtons">
              <button className="scheduleButtons" value="2"> sunday</button>
            </div>
            </div>
            <div>
              <div className="nestedButtons">
                <button className="scheduleButtons" value="2"> monday</button>
              </div>
            </div>
            <div>
              <div className="nestedButtons">
                <button className="scheduleButtons" value="3"> tuesday</button>
              </div>
            </div>
            <div>
              <div className="nestedButtons">
                <button className="scheduleButtons" value="4">wednesday</button>
              </div>
            </div>
            <div>
              <div className="nestedButtons">
                <button className="scheduleButtons" value="5">thursday</button>
              </div>
            </div>
            <div>
              <div className="nestedButtons">
                <button className="scheduleButtons" value="6">friday</button>
              </div>
            </div>
            <div>
              <div className="nestedButtons">
                {this.state.viewOutfit ? <Build/> : <button onClick={this.togglePosting} className='scheduleButtons'> saturday </button>}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
  };
}
