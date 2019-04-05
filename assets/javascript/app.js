//initialize my variables
var timeRemaining= 0,
    correct = 0,
    incorrect = 0,
    unanswered = 0,
    //variable to keep track of what question we are on
    questionNumber = 0,
    correctAnswersArray = 1,
    whatQuestion= "q" + questionNumber

// with my questions
var questions={
    q0: {
        question: "q1",
        answers: ["a1","a2", "a3", "a4"],
    },
    q1: {
        question: "q2",
        answers: ["a1","a2", "a3", "a4"],
    },
    q2: {
        question: "q3",
        answers:["a1","a2", "a3", "a4"],
    },
    q3: {
        question: "q4",
        answers: ["a1","a2", "a3", "a4"],
    },
    q4: {
        question: "q5",
        answers: ["a1","a2", "a3", "a4"]
    }
}


  //variable to store my correct answers
var correctAnswers= ["", questions.q0.answers[2], questions.q1.answers[1], questions.q2.answers[2], questions.q3.answers[3], questions.q4.answers[0] ]

$(document).ready(function(){


    //start button is pressed it will display first question
    $("#startButton").on("click", function(){
        $("#startButton").hide()
        trivia.displayQuestion()
    })


 $("#answer1").on("click", function(){
     $("#startButton").hide()
     if($(".answer1").text() === correctAnswers[correctAnswersArray]){
         trivia.correct()
     }else{
         trivia.incorrect()
     }
 })

 $("#answer2").on("click", function(){
    $("#startButton").hide()
    if($(".answer2").text() === correctAnswers[correctAnswersArray]){
        trivia.correct()
    }else{
        trivia.incorrect()
    }
})

$("#answer3").on("click", function(){
    $("#startButton").hide()
    if($(".answer3").text() === correctAnswers[correctAnswersArray]){
        trivia.correct()
    }else{
        trivia.incorrect()
    }
})

$("#answer4").on("click", function(){
    $("#startButton").hide()
    if($(".answer4").text() === correctAnswers[correctAnswersArray]){
        trivia.correct()
    }else{
        trivia.incorrect()
    }
})









var trivia={
    displayQuestion: function(){
        $(".question").text(questions[whatQuestion].question)
        $(".answer1").text(questions[whatQuestion].answers[0])
        $(".answer2").text(questions[whatQuestion].answers[1])
        $(".answer3").text(questions[whatQuestion].answers[2])
        $(".answer4").text(questions[whatQuestion].answers[3])
    },


    correct: function(){
        $(".answers").hide()
        $(".question").text("Correct!")

    },


    incorrect: function(){
        $(".answers").hide()
        $(".question").text("Wrong!!!")
    }
}





























})