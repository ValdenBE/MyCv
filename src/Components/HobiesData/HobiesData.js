import React, { Component, Fragment } from 'react';
import './HobiesData.css';
import Data from '../Assets/Data';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';




class HobiesData extends Component {
  render() {
    
    return (
      <div className="HobiesData">
        {Data.hobies.map((el, id)=>{
          return(
            <Fragment>
            <p className="Hobbies-Title allTitles">{el.title}<SportsEsportsIcon style={{color:"#6ab5d4"}}/></p>
            <hr />
            <p>{el.items.join(", ")}</p>
            </Fragment>
          )
        })}
      </div>
    );
  }
}

export default HobiesData;