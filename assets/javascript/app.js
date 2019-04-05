//initialize my variables
var timeRemaining= 30,
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
        question: "How many Earth's could fit inside the sun?",
        answers: ["one-hundrded","one-thousand", "one-hundred-thousand", "one-million"],
    },
    q1: {
        question: "Light from the sun takes how many minutes to reach Earth?",
        answers: ["3 minutes","8 minutes", "20 minutes", "36 minutes"],
    },
    q2: {
        question: "The sun is mainly made up of two elements: hydrogen and ...",
        answers:["oxygen","nitrogen", "helium", "fluoride"],
    },
    q3: {
        question: "How many degrees Celsius is the middle of the sun?",
        answers: ["100,000","500,000", "1 million", "15 million"],
    },
    q4: {
        question: "How much more powerful is the sun's gravity than Earth's?",
        answers: ["28","18", "8", "0.08"]
    }
}


  //variable to store my correct answers
var correctAnswers= ["", questions.q0.answers[3], questions.q1.answers[1], questions.q2.answers[2], questions.q3.answers[3], questions.q4.answers[0] ]

$(document).ready(function(){


    //start button is pressed it will display first question
    $("#startButton").on("click", function(){
        $("#startButton").hide()
        $(".endGame").empty()
        $("#round").addClass("round")
      
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
          timeRemaining= 30
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
        timeRemaining= 30
        $(".timeRemaining").text(timeRemaining + " seconds")
    },

    score: function(){
        return ((correct / 5) * 100) + "%"
    }
}
















})