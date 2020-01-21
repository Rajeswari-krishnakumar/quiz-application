import React from 'react';

function Result(props){
	return(
		<div className="centerContent homeScreen" style={{padding:0}}>
			<div className="boldText smallerText">
				{props.activityNum}
			</div>
			<div className="biggerText boldText" style={{padding:"10px 20px"}}>
				Results
			</div>
			{props.allResults}
			<button onClick={props.showHomeScreen}> Home </button>
		</div>
	)
}
export default Result;