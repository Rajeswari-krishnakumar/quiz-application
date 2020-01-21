import React from 'react';
function Question(props){
	let questionArr;
	//Changes to show the text inbetween * in bold
	if(props.allQuestions[props.questionNum-1]){
		questionArr = props.allQuestions[props.questionNum-1]['stimulus'].split('*');
	}
	return(
		<div className="centerContent">
  			<div className="extraMargin boldText">{props.heading}</div>
  			<div className="biggerText boldText extraMargin">Q{props.questionNum}.</div>
  			<div className="greyBackground">
      			{questionArr[0]}<strong>{questionArr[1]}</strong>{questionArr[2]}
      		</div>
      		<div>
      			<button className="centerButton" onClick={()=>props.nextQuestion(true)}>CORRECT</button>
      			<button className="centerButton" onClick={()=>props.nextQuestion(false)}>INCORRECT</button>
      		</div>
  		</div>
	);
}
export default Question;