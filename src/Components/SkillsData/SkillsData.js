import React, { Component, Fragment } from "react";
import "./SkillsData.css";
import Data from "../Assets/Data";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import SkillBar from 'react-skillbars';
class SkillsData extends Component {
  render() {
    return (
      <div className="SkillsData">
        <Fragment>
              <p className="Skills-Title allTitles">
              Mes Connaissances
                <LaptopMacIcon style={{ color: "#6ab5d4" }} />
              </p>
              <hr />
            </Fragment>
        <SkillBar skills={Data.skills} height={15} colors={Data.colors} />     
      </div>
    );
  }
}

export default SkillsData;
