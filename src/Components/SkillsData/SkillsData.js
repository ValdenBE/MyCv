import React, { Component, Fragment } from "react";
import "./SkillsData.css";
import Data from "../Assets/Data";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import SkillBar from "react-skillbars";
import FaceIcon from "@material-ui/icons/Face";
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
        <div className="printDivs">
          <Fragment>
            <p>Bonnes connaissances en : </p>
            {Data.skills.map((element, id) => {
              if (element.range === 2) {
                return (
                  <span>
                    {id === Data.skills.length - 1
                      ? element.type + "."
                      : element.type + ", "}
                  </span>
                );
              }
              return null;
            })}
          </Fragment>
        </div>
        <div className="printDivs">
          <Fragment>
            <p>Connaissances basiques en : </p>
            {Data.skills.map((element, id) => {
              if (element.range === 1) {
                return (
                  <span>
                    {id === Data.skills.length - 2
                      ? element.type + "."
                      : element.type + ", "}
                  </span>
                );
              }
              return null;
            })}
          </Fragment>
        </div>

        <SkillBar
          className="skillBarMargin"
          collapsed={false}
          skills={Data.skills}
          height={15}
          colors={Data.colors}
        />
        {Data.softSkills.map((el, id) => {
          return (
            <Fragment>
              <p className="Skills-Title allTitles">
                {el.title}
                <FaceIcon style={{ color: "#6ab5d4" }} />
              </p>
              <hr />
              <p>{el.items.join(", ")}</p>
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default SkillsData;
