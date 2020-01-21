import React from 'react';
import FirstFlow from './FirstFlow';
import SecondFlow from './SecondFlow';
//This is activity landing page
function ActivityFlow(props){
	let allActivity = props.allActivity;
	return (
      <div>
      	{
      		//Show corresponding flow based on the selected activity
      		props.activityNum === 1 &&
      		<FirstFlow questions={allActivity[0]['questions']} showHomeScreen={props.showHomeScreen}/>
      	}
      	{
      		props.activityNum === 2 &&
      	    <SecondFlow questions={allActivity[1]['questions']} showHomeScreen={props.showHomeScreen}/>
      	}
      </div>)

}
export default ActivityFlow;