import React, { Component } from 'react';
import './PersonalData.css';
import Data from '../Assets/Data';


class PersonalData extends Component {
  render() {
    
    return (
      <div className="PersonalData">
        <p className="Personal-Name">{Data.personalData.name}</p>
        <p className="Personal-Title">{Data.personalData.title}</p>
        <img className="ProfilePic" src={Data.personalData.image} alt="Profile Pic"></img>
        {Data.personalData.desc.map(el =>{
          return (
            <p>{el.content}</p>
          )
        })}
        <hr />
        <p className="Contact">Contact :</p>
        {Data.personalData.contacts.map(el=>{
          return (
            <p className="Personal-Text"><span className="Personal-Span">{el.type}{" : "}</span>{el.value}</p>
          )
        })}
      </div>
    );
  }
}

export default PersonalData;

