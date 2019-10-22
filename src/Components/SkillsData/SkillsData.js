import React, { Component, Fragment } from 'react';
import './SkillsData.css';
import Data from '../Assets/Data';


class SkillsData extends Component {
  render() {
    
    return (
      <div className="SkillsData">
        {Data.skills.map((el, id)=>{
          return(
            <Fragment>
            <p className="Skills-Title">{el.title}</p>
            <hr />
            <p>{el.items.join(", ")}</p>
            </Fragment>
          )
        })}
        
      </div>
    );
  }
}

export default SkillsData;