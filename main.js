var quizNumber =quizCounter+1;
var quizCounter = 0;

var selectedAnswer;
var correctAnswer;
var response = '';


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
			question: '1+3', 
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
};



function startQuiz(){
	quizCounter = 0;
	preparePageForAnyQuestions();
	$('#questionArea').show();
}

function preparePageForAnyQuestions(){
	clearCorrectAnswer();
	clearRadioInput();
	renderQuizItems();
	updateQuizTotalNumber();
	updateCurrentQuizQuestionNumber();
	displayOnlySubmitButton();
}

function nextQuestion(){
	incrementCounter();
	preparePageForAnyQuestions();
}



////Next Question reset controls:
function clearCorrectAnswer(){
	correctValue = '';
	$('#correctAnswer').html(correctValue);	
}

function clearRadioInput(){
	$('input[name="answer"]').prop('checked', false);
}

function incrementCounter(){
	quizCounter++;
}

////Next Question display controls:
function updateCurrentQuizQuestionNumber(){
	$('.currentQuestion').text(quizCounter+1);
}


function updateQuizTotalNumber(){
	$('.totalQuestions').text(state.quizItems.length);
}


function renderQuizItems(){
	$('#question').text(state.quizItems[quizCounter].question);
	for(var i=0; i<=state.quizItems[quizCounter].answers.length-1; i++){
		renderQuizAnswer(i);
	}
}

function renderQuizAnswer(i){
	$('#answer'+i.toString()).next().text(state.quizItems[quizCounter].answers[i].answer);
	$('#answer'+i.toString()).val(state.quizItems[quizCounter].answers[i].answer);
}


////////Button Controls:

function displayOnlySubmitButton(){
	console.log('display only submit button called');
	$('.startButton').hide();
	$('.nextButton').hide();
	$('.submitButton').show();
}


function displayOnlyNextButton(){
	$('.startButton').hide();
	$('.submitButton').hide();
	$('.nextButton').show();

}

function displayOnlyStartButton(){
	$('.nextButton').hide();
	$('.submitButton').hide();
	$('.startButton').show();
}

function afterSubmitButtonDisplay(){
	if (quizCounter ===state.quizItems.length-1){
		displayOnlyStartButton();
	}else
		displayOnlyNextButton();
}



////handle the submission of an answer:


function submitAnswer(){
	findSelectedAnswer();
	findCorrectAnswer();
	compareCorrectAndSelected(selectedAnswer, correctAnswer);
	afterSubmitButtonDisplay();
}

function findCorrectAnswer(){
	for (var i=0; i<=state.quizItems[quizCounter].answers.length-1; i++){
		if(state.quizItems[quizCounter].answers[i].isCorrect===true){
			correctAnswer = state.quizItems[quizCounter].answers[i].answer;
			return correctAnswer;
		}
	}
}

function findSelectedAnswer(){
	selectedAnswer = $("input:radio[name=answer]:checked").val();
	return selectedAnswer;
}

function compareCorrectAndSelected(selectedAnswer, correctAnswer){
	if (correctAnswer === selectedAnswer){
		response = "Correct!  Nice job, now let's go on to the next question.";
	}else{
		response = "Oops, that is not the correct answer.  The correct answer is "+correctAnswer;
	}
	displayResponse(response);
}

function displayResponse(response){
	$('#correctAnswer').html(response);
}



function pageReady(){
	displayOnlyStartButton();
	$('#questionArea').hide();
}


$(document).ready(function(){
	pageReady();
	$(document).on('click', '.startButton', function(){startQuiz()});
	$(document).on('click', '.submitButton', function(){submitAnswer()});
	$(document).on('click', '.nextButton', function(){nextQuestion()});

});


