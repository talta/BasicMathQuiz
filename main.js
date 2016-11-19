var quizCounter = 0


var state = {
	quizItems:[
		{
			question: '1+1', 
			answers:[
				{
					answer: '1',
					isCorrect: false
				},
				{
					answer: '2',
					isCorrect: true
				},
				{
					answer: '3',
					isCorrect: false
				},
				{
					answer:'4',
					isCorrect: false
				}
			]
		},
		{
			question: '2+2',
			answers:[
				{
					answer: '1',
					isCorrect: false
				},
				{
					answer: '2',
					isCorrect: false
				},
				{
					answer: '3',
					isCorrect: false
				},
				{
					answer:'4',
					isCorrect: true
				}
			]
		},
		{
			question: '3+3', 
			answers:[
				{
					answer: '1',
					isCorrect: false
				},
				{
					answer: '5',
					isCorrect: false
				},
				{
					answer: '7',
					isCorrect: false
				},
				{
					answer:'6',
					isCorrect: true
				}
			]
		},
		{
			question: '4+4',
			answers:[
				{
					answer: '8',
					isCorrect: true
				},
				{
					answer: '7',
					isCorrect: false
				},
				{
					answer: '6',
					isCorrect: false
				},
				{
					answer:'10',
					isCorrect: false
				}
			]
		}
	]
	///, potentially the render state function
};



////2.
function nextQuizItem(){
	console.log('next quiz item called')
	//$('.correctAnswer').hide();
	/////potentially call this following function only once from the event listener
	correctValue = ''
	updateQuizTotalNumber();
	updateCurrentQuizQuestionNumber();
	renderQuizItems();


}

function updateCurrentQuizQuestionNumber(){
	console.log('update current question number' +  quizCounter+1)
	$('.currentQuestion').text(quizCounter+1);

}


function updateQuizTotalNumber(){
	console.log('totalnumber called')
	$('.totalQuestions').text(state.quizItems.length);
}


function renderQuizItems(){
	console.log('append quiz items called');
	console.log('renderQuizItems' + state.quizItems[quizCounter].question);

	$('#question').text(state.quizItems[quizCounter].question);
	for(var i=0; i<=state.quizItems[quizCounter].answers.length-1; i++){
	//	clearQuizAnswer(i);///potentially to comment 
		//var element = $('<label for="idx"><input type="radio" name="answer" id="#answer'+i.toString()+'"><input name="sameName" id="idx" value="sameValue"></label>');
		renderQuizAnswer(i);

	}
}



function clearQuizAnswer(i){
	console.log('clear quiz answer called');
	$('#answer'+i).text('');
	////this function may not be used after a new mthod is utilized
}

function renderQuizAnswer(i){
	//var el = element[0];
	///console.log('append quiz answer called'+ state.quizItems[quizCounter].answers[i]);
	//console.log('render quiz answer called'+ $('#answer'+i.toString()));
	

	$('#answer'+i.toString()).next().text(state.quizItems[quizCounter].answers[i].answer);
	$('#answer'+i.toString()).val(state.quizItems[quizCounter].answers[i].answer);
	console.log(typeof i)

}













function submitAnswer(){
	console.log('submit answer called');

	var selectedAnswer = $("input:radio[name=answer]:checked").val();

	var isCorrectSelectedAnswer = validateAnswer(selectedAnswer);

	///maybe renderAnswer();
	///determine what to do with the retrun of isCorrectSelectedAnswer
	//displayCorrectAnswer(correctAnswer);
}






function validateAnswer(selectedAnswer){
	//show the correct answer or correct
	console.log('answer validated');
	///return correct answer from array
	//for(i=0; i<=answers.length-1; i++){
	var correctValue;

/////conditional for no answer selected do not function
////need to populate question array before this point in order to allow an answer to be selected
		//console.log(state.quizItems[quizCounter].answers[answerIndex].isCorrect)

	for (var i=0; i<=state.quizItems[quizCounter].answers.length-1; i++){
		if(state.quizItems[quizCounter].answers[i].answer===selectedAnswer && state.quizItems[quizCounter].answers[i].isCorrect){
			console.log('answer is correct');
			isCorrectSelectedAnswer =  true;
			correctValue = selectedAnswer;
			///what to return when the answer is correct: "Correct!  Nice job, now let's go on to the next question"

			displayCorrectAnswer(correctValue);
			return isCorrectSelectedAnswer;
		}else{
			console.log('answer is incorrect')
			isCorrectSelectedAnswer = false;

			///find a way to set the correct value
			//state.quizItems[quizCounter].answers[i].answer.isCorrect
			corectAnswer = state.quizItems[quizCounter].answers.find(function findCorrectAnswer(answers){state.quizItems[quizCounter].answers.isCorrect});
			console.log(correctAnswer);
			////set the correct value to be the value of the answer where isCorrect is true
			///////////////////correctValue = state.quizItems[quizCounter].answers[i].answer.val()
			/////write a function to find the correct answer in the array
			///call the function which will display it on the page (correctValue)
			displayCorrectAnswer(correctAnswer);

		}
		console.log(correctAnswer);
		
		//return isCorrectSelectedAnswer;

	}
}


///determine what should happen based on the correct Answer

/*
		if(state.quizItems[quizCounter].answers[answerIndex].isCorrect){
			console.log('answer is correct');
			correctValue =  true;
		}else{
			console.log('answer is incorrect')
			correctValue = false;
		}

	return correctValue;
	///what question i am on
	///what question was submitted
	//what is the correct answer
}
*/

function displayCorrectAnswer(correctValue){
	///find where the attribute isCorrect has a property of true
	//
	console.log('dislpay correct answer enacted');
	console.log(correctValue);
	$('#correctAnswer').html(correctValue);
	//$('#correctAnswer').show();
	console.log('correct anwswer displayed');
}





function nextQuestion(){
	console.log('next question called');
	nextQuizItem();

	quizCounter++;

}



///event listeners:
////1.
$(document).ready(function(){
	console.log('page ready');
	$(document).on('click', '.startButton', function(){nextQuizItem()});
	$(document).on('click', '.submitButton', function(){submitAnswer()});
	$(document).on('click', '.nextButton', function(){nextQuizItem()});

	////hide or disable buttons when not needed;

	////clear what radio button has been selected
});











/////junk code:
	//var eachAnswer = function(i, element){
	/*	$(el).val(state.quizItems[quizCounter].answers[i].answer);
		$(el).text(state.quizItems[quizCounter].answers[i].answer);
		console.table(state.quizItems[quizCounter].answers[i].answer);
		
		console.log('eachAnswer' +state.quizItems[quizCounter].answers[i])
		console.log(typeof state.quizItems[quizCounter].answers[i]);*/
		//element.html(eachAnswer);
		//console.log(element);
		//$('.answers').append(el);
	//};
	//eachAnswer(i);
	//console.log(el);
	//console.log(element);







/*
function findValueSelected(){
	//input{name=answer}
	var selectedAnswer=	$("input:radio[name=answer]:checked").val();
	return selectedAnswer;
}


function findCheckedAnswer(){
	for(var i=0;i<=state.quizItems[quizCounter].answers.length-1; i++){
		//potentially look for the quizcounter of the quizItems
	//grab the ID, check the property
		//if( $('#answer'+i.toString()).checked){
		if($("input:radio[name=answer]:checked")){
			//return state.quizItems[quizCounter].answers[i];///returns text
			return i;///returns index or placement
		};
	}
}
*/