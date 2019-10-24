import React, { Component, Fragment } from 'react';
import './SkillsData.css';
import Data from '../Assets/Data';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import FaceIcon from '@material-ui/icons/Face';





class SkillsData extends Component {
  render() {
    
    return (
      <div className="SkillsData">
        {Data.skills.map((el, id)=>{
          return(
            <Fragment>
            <p className="Skills-Title">{el.title}<LaptopMacIcon style={{color:"#6ab5d4"}}/></p>
            <hr />
            {el.items.map((el)=>{
              return(
                <Fragment>
                <p><span>{el.name}</span> - Niveau : {el.rate}/4</p>
                </Fragment>
              )
            })}
            </Fragment>
          )
        })}
        {Data.softSkills.map((el, id)=>{
          return(
            <Fragment>
            <p className="Skills-Title">{el.title}<FaceIcon style={{color:"#6ab5d4"}}/></p>
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