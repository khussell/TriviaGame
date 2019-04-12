//initialize my variables:
var timeRemaining= 15,
    correct = 0,
    incorrect = 0,
    unanswered = 0,
    
//variable to keep track of what question we are on:
    questionNumber = 0,
//array that holds what each questions correct answer is:
    correctAnswersArray = 1,
//using whatQuestion to access question in questions array:
    whatQuestion= "q" + questionNumber,
//interval variable
    inter,
//variable for restart of game
    startNumber=0



//object with my questions and answers 
var questions={
    q0: {
        question: "How many Earths could fit inside the sun?",
        answers: ["one-hundred","one-thousand", "one-hundred-thousand", "one-million"],
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


//waves need to be hidden and shown later
$("#waves").hide()




//let's get started
$(document).ready(function(){


//start button is pressed it will go to functions for displaying first question and styling
    $("#startButton").on("click", function(){
        trivia.beginningStyle()
        if(startNumber !=0){
          trivia.resetStyle()
        }
        trivia.displayQuestion()       
    })



//if answer one is pressed, we check here if the answer matches the correct answer and will take us to whichever function
 $("#answer1").on("click", function(){ 
     if($(".answer1").text() === correctAnswers[correctAnswersArray]){
         trivia.correct()
     }else{
         trivia.incorrect()
     }
 })



 //checking if answer 2 is the right answer
 $("#answer2").on("click", function(){
    if($(".answer2").text() === correctAnswers[correctAnswersArray]){
        trivia.correct()
    }else{
        trivia.incorrect()
    }
})


//checking if answer 3 is the right answer
$("#answer3").on("click", function(){
    if($(".answer3").text() === correctAnswers[correctAnswersArray]){
        trivia.correct()
    }else{
        trivia.incorrect()
    }
})


//checking if answer 4 is the right answer
$("#answer4").on("click", function(){
    if($(".answer4").text() === correctAnswers[correctAnswersArray]){
        trivia.correct()
    }else{
        trivia.incorrect()
    }
})






//object with all of the trivia functions
var trivia={


//function to display question depending on what questionNumber's value is
    displayQuestion: function(){
        if(questionNumber === 5){
//if end of game, re-initialize variables and styling
            startNumber++
            trivia.endStyle()
            correctAnswersArray = 1
            correct= 0
            incorrect=0
            unanswered=0
            timeRemaining= 15
            questionNumber=0 
        }else{
//if not end of game we will set timer for question and change the question text and answer text, add styling
            inter = setInterval(trivia.count, 1000)
            $(".timeRemaining").text(" " + timeRemaining + " seconds")
            whatQuestion= "q" + questionNumber
            $(".question").text(questions[whatQuestion].question)
            $(".answers").show()
            $(".answer1").text(questions[whatQuestion].answers[0])
            $(".answer2").text(questions[whatQuestion].answers[1])
            $(".answer3").text(questions[whatQuestion].answers[2])
            $(".answer4").text(questions[whatQuestion].answers[3])
//trivia.background is styling
            trivia.background()
//a little more styling below based on questionNumber
            if(questionNumber === 1){
                $("#round").addClass("roundOff")
            }else if( questionNumber === 3){
                $("#sunImage").css("top", "480px")
            }else if(questionNumber ===4){
                $("#sunImage").animate({
                    top: "-20px",
                    width: '800px',
                    height: "800px",
                    marginLeft: "220px" 
                })
            }
        }
    },

//if answer chosen is correct, this function will send to another function for styling 
//questionNumber++ for future display of next question, and add to correct answer variable, add to answersArray for next correct answer
//clear interval question timer
//set timer for page showing user was correct
    correct: function(){
        trivia.answered()
        questionNumber+= 1
        clearInterval(inter)
        correct++
        $(".answers").hide()
        $(".question").text("Correct!")
        correctAnswersArray ++
        setTimeout(trivia.displayQuestion, 3000)
        setTimeout(trivia.resetTime, 3000)
        setTimeout(trivia.background, 3000)
    },


//same as correct only page will show user they were incorrect, incorrect variable will add one
    incorrect: function(){
        trivia.answered()
        clearInterval(inter)
        incorrect++
        $(".answers").hide()
        $(".question").text("Wrong!!! The correct answer is " + correctAnswers[questionNumber+1] + ".")
        questionNumber +=1
        correctAnswersArray++
        setTimeout(trivia.displayQuestion, 3000)
        setTimeout(trivia.resetTime, 3000)
        setTimeout(trivia.background, 3000)
    },



//function for interval to do every second
//every second time remaining will decrease by one
//conditional statements for grammar and if time = 0 , interval will be cleared and function for timing out will take place
    count: function(){
         timeRemaining--
         if(timeRemaining === 1){
            $(".timeRemaining").text(" " + timeRemaining + " second")
         }else if(timeRemaining === 0){ 
            $(".timeRemaining").text(" " + timeRemaining + " seconds")
             clearInterval(inter)
             trivia.timeOut()
         }else{
            $(".timeRemaining").text(" " + timeRemaining + " seconds")
        }
    },


//when time runs out this function will execute
//similar to correct/incorrect, but unanswered++, and no separate function for styling, because elements will be where they should be

    timeOut: function(){
        if(questionNumber === 0){
            $("#round").removeClass("round")
            $("#round").addClass("roundOn")  
        }
        unanswered ++
        $(".answers").hide()
        $(".question").append("<p>").text("You ran out of time!!! The correct answer is " + correctAnswers[questionNumber+1] + ".")
        questionNumber +=1
        correctAnswersArray++
        setTimeout(trivia.displayQuestion, 3000)
        setTimeout(trivia.resetTime, 3000)
    },



//resets time for each question, called from incorrect, correct, and timeOut functions
    resetTime: function(){
        timeRemaining= 15
        $(".timeRemaining").text(" " + timeRemaining + " seconds")
    },



//math for percentage score at end
    score: function(){
        return ((correct / 5) * 100) + "%"
    },



//called from displayQuestion function for styling depending on questionNumber's value
    background: function(){
       if(questionNumber === 2){
          $("#round").removeClass("roundOff")
          $("#round").hide()
          $("body").css("backgroundColor", "lightskyblue")
          $("#sunsetBackground").addClass("backgroundSky")
          $("#sunImage").addClass("sunset")
          $('body').addClass("bodyDim")
          $("#waves").show()
          $("#opacityWaves").show()
          $("#opacityWaves").addClass("opacityWaves")
      }else if(questionNumber === 3){
          $("body").removeClass("bodyDim")
          $("body").addClass("lightenBody")
          $("#sunImage").removeClass("sunset")
          $("#sunImage").addClass("sunrise")
          $("#opacityWaves").removeClass("opacityWaves")
          $("#opacityWaves").addClass("lightenWaves")
      } else if(questionNumber === 4){
          $("#opacityWaves").hide()
          $("#sunImage").removeClass("sunrise")
          $("#sunImage").animate({ 
              top: "-20px",
              width: '800px',
              height: "800px",
              marginLeft: "220px"
            })
          $("body").css("text-shadow", "2px 2px brown")
          $("a").css("text-shadow", "2px 2px brown")
          $("#waves").hide()
      }
    },



//if question is answered and time did NOT run out, here is special styling depending on what question was just asked
//this styling is for the pages saying correct/ incorrect   
    answered: function(){
        if(questionNumber === 0){
            $("#round").removeClass("round")
            $("#round").addClass("roundOn")
        }else if(questionNumber === 1){
            $("#round").hide()
        }else if(questionNumber ===2){
            $("#sunImage").removeClass("sunset")
            $("#sunImage").css("top", "480px")
            $("#opacityWaves").removeClass("opacityWaves")
            $("#opacityWaves").addClass("sundownWaves")
            $("body").removeClass("bodyDim")
            $("body").css("background-color", "black") 
        } else if(questionNumber === 3){
            $("body").removeClass("lightenBody")
            $("body").css("background-color", "lightskyblue")
            $("#sunImage").removeClass("sunrise")
            $("#sunImage").css("top", "89px")
            $("#opacityWaves").removeClass("lightenWaves")
            $("#opacityWaves").removeClass("sundownWaves")
        } else if( questionNumber === 4){
            $("#sunImage").animate({
                top: "-20px",
                width: '0px',
                height: "0px",
                marginLeft: "220px"
              })
              $("body").removeClass("lightenBody")
              $("body").addClass("endBackground")
        }
    },



//when start button is clicked this function will execute for initial styling
    beginningStyle: function(){
        $("#startButton").hide()
        $(".endGame").empty()
        $("#round").addClass("round")
        $("body").removeClass("endBackground")
        $("body").removeClass("lightenBody")
        $("body").css("background-color", "black")
        $("#opacityWaves").removeClass("lightenWaves")
        $(".question").css("font-weight:", "none")
        $("body").css("text-shadow", "none")
        $("a").css("text-shadow", "none") 
    },


//when start button is clicked after game has been played through once, this function will execute for styling
    resetStyle: function(){
        $("#round").removeClass("roundOn")  
        $("#round").css("display", "block")  
        $("#sunImage").animate({
          zIndex: "-2",
          top: "89px",
          width: '240px',
          height: "240px",
          marginLeft: "0px",
          left: "150px"
        })
    },


//end styling when function displayQuestion executes and questionNumber equals five
    endStyle: function(){
        $("body").removeClass("lightenBody")
            $("body").addClass("endBackground")
            $("body").css("color", "white")
            $("a").css("color", "white") 
            $("body").css("text-shadow", "2px 2px brown")
            $("a").css("text-shadow", "2px 2px brown")  
            $("#startButton").show()
            $("#startButton").text("Start Again")
            $("#startButton").css("border", "3px brown solid")
            $("#startButton").css("margin-top", "30px")
            $(".endGame").show()
            $(".question").text("All done, how'd you do?")
            $(".question").css("font-weight", "bold")
            $(".endGame").append("<p>Correct: " + correct + "</p>")
            $(".endGame").append("<p>Incorrect: " + incorrect + "</p>")
            $(".endGame").append("<p>Unanswered: " + unanswered +"</p>")
            $(".endGame").append("<p>Score: " + trivia.score() + "</p>")
    }
}





})