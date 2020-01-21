import React from 'react';
import Result from './Result';

function FirstFlowResult(props){
	let allResults = props.results.reduce((allResult,result,i)=>{
		allResult.push(<div className="resultDiv" key={i}><span>Q{i+1}</span><span>{result}</span></div>);
		return allResult;
	},[])
	return (
            <Result allResults={allResults} showHomeScreen={props.showHomeScreen}
             activityNum={"ACTIVITY ONE"}/>
            )
}
export default FirstFlowResult;