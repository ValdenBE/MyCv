import React, { Component, Fragment } from 'react';
import './WorkData.css';
import Data from '../Assets/Data';
import WorkIcon from '@material-ui/icons/Work';




class WorkData extends Component {
  render() {
    
    return (
      <div className="WorkData">
        <p className="Work-Title allTitles">{Data.work.title}<WorkIcon style={{color:"#6ab5d4"}}/></p>
        <hr />
        {Data.work.items.map((el, i)=>{
          return(
            <Fragment>
            <p key={i}>{el.datesBetween}<br />{el.title}{" @ "}{el.company}</p>
            </Fragment>
          )
        })}
      </div>
    );
  }
}

export default WorkData;