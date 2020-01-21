import React, { useState } from 'react';
import SecondFlowResult from '.././ResultTypes/SecondFlowResult';
import Question from './Question';

let result = [], initialLoad=true;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function SecondFlow(props){
	const [roundNum, setRoundNum] = useState(1);
	const [questionNum, setQuestionNum] = useState(1);
	const [showRoundNum, setShowRoundNum] = useState(false);
	let allQuestions;

	if(props['questions'][roundNum-1]){
		allQuestions = props['questions'][roundNum-1]['questions'];
	}
	//to show the round number for sometime
	async function showRoundNumScreen(){
			setShowRoundNum(true);
			await sleep(1000);
			setShowRoundNum(false);
	}
	if(initialLoad){
		initialLoad = false;
		showRoundNumScreen();
	}
	function showHomeScreen(){
		result=[];
		initialLoad=true;
		props.showHomeScreen();
	}
	function nextQuestion(userAns){
		allQuestions = props['questions'][roundNum-1]['questions'];
		let correctAns = allQuestions[questionNum-1]['is_correct'];
		//Construct the result array based on user answer
		//Result array is an array of Obj-> An object for each round
		if(!result[roundNum-1]){
			result[roundNum-1] ={"round":roundNum,"result":[]}
		}
		
		userAns === correctAns ? result[roundNum-1]["result"].push('CORRECT'):
								 result[roundNum-1]["result"].push('FALSE')
		
		//If there are no more questions, go to next round and start from 1st question
		//Else go to next question in same round
		if(!allQuestions[questionNum]){
			//Show Round screen only when there are more rounds
			if(props['questions'][roundNum]){
				showRoundNumScreen();
			}
			setRoundNum(roundNum+1);
			setQuestionNum(1);

		}else{
			setQuestionNum(questionNum+1);
		}
	}
	
	return (
    	<div>
    	{
			showRoundNum &&
			<div className="centerContent">
    			<div className="extraMargin boldText">
    				ACTIVITY TWO
    			</div>
    			<div className="biggerText boldText extraMargin">
    				ROUND {roundNum}
    			</div>
    		</div>
    	}
    	{
    		//If there are more questions, then show the questions.Else, show the result screen
      		!showRoundNum && allQuestions ? (
	      		<Question allQuestions={allQuestions} nextQuestion={nextQuestion}
	      		questionNum={questionNum} heading={"ACTIVITY TWO / Round "+roundNum}/>
	      		):(
	      		!showRoundNum &&
	      			<SecondFlowResult results={result} showHomeScreen={showHomeScreen}/>
	      		)
    	}
    	</div>)
}
export default SecondFlow;