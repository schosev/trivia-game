(function() {
    console.log("js file");
    // var questionAnswerArray = [
    //     { qAndA1: {
    //         question1: "In which year did Green Day release the album 'Dookie'?",
    //         q1AnswerA: "1994",
    //         q1AnswerB: "1995",
    //         q1AnswerC: "1996",
    //         q1AnswerD: "1997"
    //         }
    //     },
    //     { qAndA2: {
    //         question2: "The album 'Parklife' by Blur was first released in which year?",
    //         q2AnswerA: "1993",
    //         q2AnswerB: "1994",
    //         q2AnswerC: "1995",
    //         q2AnswerD: "1996"
    //         }
    //     },
    // ];

    // var questionAnswerArray = [
    //     {
    //         question: ["In which year did Green Day release the album 'Dookie'?",
    //         "The album 'Parklife' by Blur was first released in which year?",],
    //         q1AnswerA: ["1994", "1993"],
    //         q1AnswerB: ["1995", "1994"],
    //         q1AnswerC: ["1996", "1995"],
    //         q1AnswerD: ["1997", "1996"]
    //     }
    // ];

    var question = ["In which year did Green Day release the album 'Dookie'?",
            "The album 'Parklife' by Blur was first released in which year?",
            "Billy Corgan is the lead singer of which band?",
            "Kurt Cobain's wife Courtney Love is the lead singer of which band?",
            "Which of the following bands is the only one to hail from the land down under?",
            "What 90's alternative rock band was famed for playing a'basitar' and a 'guitbass'?",
            "What city was associated with Grunge?",
            "What was the name of Nirvana's first full length album?"];
    var AnswerA = ["1994", "1993", "Eve 6", "Garbage", "Oasis", "Nine Inch Nails", "Seattle", "Nevermind"];
    var AnswerB = ["1995", "1994", "Smashing Pumpkins", "No Doubt", "Bush", "Presidents of the United States of America",
                "New York City", "Nirvana"];
    var AnswerC = ["1996", "1995", "Harvey Danger", "Hole", "Silverchair", "The Offspring", "Los Angeles", "In Utero"];
    var AnswerD = ["1997", "1996", "Oasis", "The Donnas", "Blur", "Jane's Addiction", "San Fancisco", "Bleach"];
    var correctAnswer = ["a", "b", "b", "c", "c", "b", "a", "d"]

    var answer = "";
    var timer = 30;
    var QandAindex = 0;
    var timerInterval;
    var timerRunning = false;
    var waitTimer = 5;
    var waitInterval;
    var waitRunning = false;
    var clickedAnswer;
    var answeredCorrectly = 0;
    var answeredWrong = 0;

    function startGame() {
        $("#timer").text(timer);
        if (QandAindex <= question.length) {
            selectQandA();
        }
        startTimer();
    }
        
    function selectQandA() {
        //for (var i=0; i<questionAnswerArray.length; i++) {
           // console.log("array length: " + questionAnswerArray.length);
            
            // $("#question").text(questionAnswerArray[i].qAndA1.question1);
            // $("#answer-a").text(questionAnswerArray[i].qAndA1.q1AnswerA);
            // $("#answer-b").text(questionAnswerArray[i].qAndA1.q1AnswerB);
            // $("#answer-c").text(questionAnswerArray[i].qAndA1.q1AnswerC);
            // $("#answer-d").text(questionAnswerArray[i].qAndA1.q1AnswerD);
        //}
        // for (var q=0; q<QandAindex; q++) {
        //     $("#question").text(question[q]);
        // }
        // for (var a=0; a<AnswerA.length; a++) {
        //     $("#answer-a").text(AnswerA[a]);
        // }
        // for (var b=0; b<AnswerB.length; b++) {
        //     $("#answer-b").text(AnswerB[b]);
        // }
        // for (var c=0; c<AnswerC.length; c++) {
        //     $("#answer-c").text(AnswerC[c]);
        // }
        // for (var d=0; d<AnswerD.length; d++) {
        //     $("#answer-d").text(AnswerD[d]);
        // }
        // for (var x=0; x<AnswerD.length; x++) {
        //     answer = correctAnswer[x];
        // }
        $("#question").text(question[QandAindex]);
        $("#answer-a").text(AnswerA[QandAindex]);
        $("#answer-b").text(AnswerB[QandAindex]);
        $("#answer-c").text(AnswerC[QandAindex]);
        $("#answer-d").text(AnswerD[QandAindex]);
        answer = correctAnswer[QandAindex];
    }

    function startTimer() {
        if (!timerRunning) {
            clearInterval(timerInterval);
            timerInterval = setInterval(keepTime, 1000);
            timerRunning = true;
          }
    }

    function keepTime () {
        if (timerRunning) {
            timer--;
            $("#timer").text(timer);
            if (timer <= 0) {
                stopTimer();
            }
        }
    }

    function stopTimer () {
        timerInterval = clearInterval(timerInterval);
        timerRunning = false;
    } 

    function chosenAnswer() {
        if (clickedAnswer === answer) {
            //correct answer logic
            console.log("correct answer");
            $("#answer-yes-no").text("YOU ARE CORRECT!!!").css({"color": "#33cc33"});
            answeredCorrectly++;
        }
        else {
            //wrong answer logic
            $("#answer-yes-no").text("THAT IS WRONG!!!").css({"color": "#ff0000"});
            answeredWrong++;
        }
        stopTimer();
        $(".question-answer").hide();
        $(".display-answer").show();
        
        if (answer === "a") {
        $("#correct-answer").text(AnswerA[QandAindex]);
        } else if (answer === "b") {
            $("#correct-answer").text(AnswerB[QandAindex]);
        } else if (answer === "c") {
            $("#correct-answer").text(AnswerC[QandAindex]);
        } else if (answer === "d") {
            $("#correct-answer").text(AnswerD[QandAindex]);
        }

        answeredWait ();
    }

    function answeredWait () {
        if (!waitRunning) {;
            waitInterval = clearTimeout(waitInterval);
            waitInterval = setTimeout(stopWait, 5000);
            waitRunning = true;
          }
    }

    function stopWait () {
        waitInterval = clearTimeout(waitInterval);
        waitRunning = false;
        isGameComplete();
    } 

    function isGameComplete() {
        QandAindex++
        if (QandAindex < question.length) {
            nextQuestion();
        } else {
            gameOver();
        }
    }

    function nextQuestion() {
        timer = 30;
        waitTimer = 5;
        $(".question-answer").show();
        $(".display-answer").hide()
        startGame();
    }

    function gameOver() {

        $(".gameover-screen").show();
        $(".game-screen").hide();
        $("#correct").text(answeredCorrectly);
        $("#wrong").text(answeredWrong);
        $("#reset-btn").on("click", function () {
            resetGame();
        })
    }

    function resetGame() {
        $(".gameover-screen").hide();
        $(".game-screen").show();
        timer = 30;
        QandAindex = 0;
        timerRunning = false;
        waitTimer = 5;
        waitRunning = false;
        answeredCorrectly = 0;
        answeredWrong = 0;
        startGame();
    }


    $("#start-btn").on("click", function () {
        $(".start-screen").hide();
        $(".game-screen").show();
        startGame();
    })

    $(".all-answers").on("click", function() {
        clickedAnswer = ($(this).attr("value"));
        chosenAnswer();
    })

})();