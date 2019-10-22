import React, { Component, Fragment } from 'react';
import './HobiesData.css';
import Data from '../Assets/Data';


class HobiesData extends Component {
  render() {
    
    return (
      <div className="HobiesData">
        {Data.hobies.map((el, id)=>{
          return(
            <Fragment>
            <p className="Hobbies-Title">{el.title}</p>
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