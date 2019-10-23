import React from 'react';
import './App.css';
import PersonalData from './Components/PersonalData/PersonalData'
import SchoolData from './Components/SchoolData/SchoolData'
import WorkData from './Components/WorkData/WorkData'
import SkillsData from './Components/SkillsData/SkillsData'
import HobiesData from './Components/HobiesData/HobiesData'
import Grid from '@material-ui/core/Grid';
import Frame from './frame.png'

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
      <Grid className="Personal-Column" item xs={12} sm={4}>
      <PersonalData />
      </Grid>
      <Grid  item xs={12} sm={8}>
      <Grid container spacing={3}>
      <Grid className="print Forma-Column" item xs={12} sm={6}>
      <SchoolData />
      <SkillsData />
      </Grid>
      <Grid className="print Forma-Column" item xs={12} sm={6}>
      <WorkData />
      <HobiesData />
      </Grid>
      </Grid>
      </Grid>
      </Grid>
      <img className="Frame" src={Frame} alt="frame"/>
    </div>
  );
}

export default App;
