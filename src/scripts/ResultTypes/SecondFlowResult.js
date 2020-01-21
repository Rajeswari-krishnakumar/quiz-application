import React from 'react';
import Result from './Result';
function SecondFlowResult(props){
	let allResults = props.results.reduce((allResult,resultObj,i)=>{
		//Show the round number for each round
		allResult.push(<div className="resultDiv" key={i}><span>ROUND {i+1}</span></div>);
		resultObj["result"].forEach((result,j)=>{
			allResult.push(<div className="resultDiv" key={"r"+i+"q"+j}><span>Q{j+1}</span><span>{result}</span></div>);
		})
		return allResult;
	},[])
	return (
		<Result allResults={allResults} showHomeScreen={props.showHomeScreen} activityNum={"ACTIVITY TWO"}/>
	)

}
export default SecondFlowResult;