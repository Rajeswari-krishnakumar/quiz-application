import React, { useState } from 'react';
import FirstFlowResult from '.././ResultTypes/FirstFlowResult';
import Question from './Question';


let result = [];
function FirstFlow(props){
	let allQuestions = props['questions'];
	const [questionNum, setQuestionNum] = useState(1);
	function showHomeScreen(){
		result=[];
		props.showHomeScreen();
	}
	function nextQuestion(userAns){
		//questionNum -1 => to match the array index
		let correctAns = allQuestions[questionNum-1]['is_correct'];
		//Construct the result array based on user answer
		userAns === correctAns ? result.push('CORRECT') : result.push('FALSE')
		setQuestionNum(questionNum+1)
	}
	return (
    	<div>
    	{
    		//If there are more questions, then show the questions.Else, show the result screen
      		allQuestions[questionNum-1] ? (
	      		<Question allQuestions={allQuestions} nextQuestion={nextQuestion}
	      		questionNum={questionNum} heading={"ACTIVITY ONE"}/>
	      		):(
	      			<FirstFlowResult results={result} showHomeScreen={showHomeScreen} />
	      		)
    	}
    	</div>)

}
export default FirstFlow;