import React, { Component, Fragment } from 'react';
import './SchoolData.css';
import Data from '../Assets/Data';
import MenuBookIcon from '@material-ui/icons/MenuBook';







class SchoolData extends Component {
  render() {
    
    return (
      <div className="SchoolData"><p className="School-Title">{Data.school.title}<MenuBookIcon style={{color:"#6ab5d4"}}/></p>
        <hr />
        
        {Data.school.items.map((el, i)=>{
          return(
            <Fragment>
            <p key={i}>{el.title}{"@"}{el.authority}</p>
            <p key={i}>{"Website : "}{el.authorityWebSite}</p>
            <p key={i}>{"Date : "}{el.rightSide}</p>
            </Fragment>
          )
        })}
      </div>
    );
  }
}

export default SchoolData;