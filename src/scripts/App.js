import React, { useState } from 'react';
import '../css/App.css';
import allQuestions from './allQuestions';
import ActivityFlow from './ActivityFlowTypes/ActivityFlow';

function App() {
  //allQuestion is the JSON data from s3
  let allActivity = allQuestions['activities'];
  const [activityClicked, setActivityStatus] = useState(false);
  const [activityNum, setActivityNumber] = useState(0);

  return (
    <div>
      {
        //Show home page when activity is not clicked
        !activityClicked &&
        <div className="centerContent homeScreen">
          <header>
            <h3>CAE</h3>
            <h1>Error Find</h1>
          </header>
            <button onClick={()=>{setActivityNumber(1);setActivityStatus(true)}}>
              ACTIVITY ONE
            </button>
            <button onClick={()=>{setActivityNumber(2);setActivityStatus(true)}}>
              ACTIVITY TWO
            </button>
        </div>
      }
      {
        activityClicked &&
        <ActivityFlow allActivity={allActivity} activityNum={activityNum} 
        showHomeScreen={()=>{setActivityStatus(false)}}/>
      }
    </div>
  );
}

export default App;
