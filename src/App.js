import React from 'react';
import './App.css';
import PersonalData from './Components/PersonalData/PersonalData'
import SchoolData from './Components/SchoolData/SchoolData'
import WorkData from './Components/WorkData/WorkData'
import SkillsData from './Components/SkillsData/SkillsData'
import HobiesData from './Components/HobiesData/HobiesData'
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
      <Grid className="Personal-Column" item xs={12} sm={4}>
      <PersonalData />
      </Grid>
      <Grid className="Forma-Column" item xs={12} sm={4}>
      <SchoolData />
      <SkillsData />
      </Grid>
      <Grid className="Work-Column" item xs={12} sm={4}>
      <WorkData />
      <HobiesData />
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
