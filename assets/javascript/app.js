//initialize my variables
var timeRemaining= 5,
    correct = 0,
    incorrect = 0,
    unanswered = 0,
    //variable to keep track of what question we are on
    questionNumber = 0,
    correctAnswersArray = 1,
    whatQuestion= "q" + questionNumber,
    inter

// with my questions
var questions={
    q0: {
        question: "q0",
        answers: ["a1","a2", "a3", "a4"],
    },
    q1: {
        question: "q1",
        answers: ["a1","a2", "a3", "a4"],
    },
    q2: {
        question: "q2",
        answers:["a1","a2", "a3", "a4"],
    },
    q3: {
        question: "q3",
        answers: ["a1","a2", "a3", "a4"],
    },
    q4: {
        question: "q4",
        answers: ["a1","a2", "a3", "a4"]
    }
}


  //variable to store my correct answers
var correctAnswers= ["", questions.q0.answers[2], questions.q1.answers[1], questions.q2.answers[2], questions.q3.answers[3], questions.q4.answers[0] ]

$(document).ready(function(){


    //start button is pressed it will display first question
    $("#startButton").on("click", function(){
        $("#startButton").hide()
        $(".endGame").empty()
        trivia.displayQuestion()
       
    })


 $("#answer1").on("click", function(){ 
     if($(".answer1").text() === correctAnswers[correctAnswersArray]){
         trivia.correct()
     }else{
         trivia.incorrect()
     }
 })



 $("#answer2").on("click", function(){
    if($(".answer2").text() === correctAnswers[correctAnswersArray]){
        trivia.correct()
    }else{
        trivia.incorrect()
    }
})



$("#answer3").on("click", function(){
    if($(".answer3").text() === correctAnswers[correctAnswersArray]){
        trivia.correct()
    }else{
        trivia.incorrect()
    }
})



$("#answer4").on("click", function(){
    if($(".answer4").text() === correctAnswers[correctAnswersArray]){
        trivia.correct()
    }else{
        trivia.incorrect()
    }
})









var trivia={
    displayQuestion: function(){
        if(questionNumber === 5){
          $("#startButton").show()
          $(".endGame").show()
          $(".question").text("All done, how'd you do?")
          $(".endGame").append("<p>Correct: " + correct + "</p>")
          $(".endGame").append("<p>Incorrect: " + incorrect + "</p>")
          $(".endGame").append("<p>Unanswered: " + unanswered +"</p>")
          $(".endGame").append("<p>Score: " + trivia.score() + "</p>")
          correct= 0
          incorrect=0
          unanswered=0
          timeRemaining= 5
          questionNumber=0
          
        }else{
        inter = setInterval(trivia.count, 1000)
        $(".timeRemaining").text(timeRemaining + " seconds")
        whatQuestion= "q" + questionNumber
        $(".question").text(questions[whatQuestion].question)
        $(".answers").show()
        $(".answer1").text(questions[whatQuestion].answers[0])
        $(".answer2").text(questions[whatQuestion].answers[1])
        $(".answer3").text(questions[whatQuestion].answers[2])
        $(".answer4").text(questions[whatQuestion].answers[3])
        }
    },


    correct: function(){
        clearInterval(inter)
        correct++
        $(".answers").hide()
        $(".question").text("Correct!")
        questionNumber+= 1
        correctAnswersArray ++
        setTimeout(trivia.displayQuestion, 3000)
        setTimeout(trivia.resetTime, 3000)
    },


    incorrect: function(){
        clearInterval(inter)
        incorrect++
        $(".answers").hide()
        $(".question").text("Wrong!!!")
        questionNumber +=1
        correctAnswersArray++
        setTimeout(trivia.displayQuestion, 3000)
        setTimeout(trivia.resetTime, 3000)
    },

    count: function(){
         timeRemaining--
         if(timeRemaining === 1){
            $(".timeRemaining").text(timeRemaining + " second")
         }else if(timeRemaining === 0){ 
            $(".timeRemaining").text(timeRemaining + " seconds")
             clearInterval(inter)
             trivia.timeOut()
         }else{
            $(".timeRemaining").text(timeRemaining + " seconds")
        }
    },

    timeOut: function(){
        unanswered ++
        $(".answers").hide()
        $(".question").text("You ran out of time!!!")
        questionNumber +=1
        correctAnswersArray++
        setTimeout(trivia.displayQuestion, 3000)
        setTimeout(trivia.resetTime, 3000)
    },

    resetTime: function(){
        timeRemaining= 5
        $(".timeRemaining").text(timeRemaining + " seconds")
    },

    score: function(){
        return ((correct / 5) * 100) + "%"
    }
}





























})