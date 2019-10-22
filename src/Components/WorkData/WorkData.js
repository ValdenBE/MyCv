import React, { Component, Fragment } from 'react';
import './WorkData.css';
import Data from '../Assets/Data';


class WorkData extends Component {
  render() {
    
    return (
      <div className="WorkData">
        <p className="Work-Title">{Data.work.title}</p>
        <hr />
        {Data.work.items.map((el, i)=>{
          return(
            <Fragment>
            <p key={i}>{el.datesBetween}<br />{el.title}{"@"}{el.company}</p>
            </Fragment>
          )
        })}
      </div>
    );
  }
}

export default WorkData;