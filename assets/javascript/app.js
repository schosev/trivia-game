(function() {

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
    var timeUp = false;

    function startGame() {
        $("#timer").text(timer);
        if (QandAindex <= question.length) {
            selectQandA();
        }
        startTimer();
    }
        
    function selectQandA() {
        $("#question").html("<p>" + question[QandAindex] + "</p>");
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
                timeUp = true;
                clickedAnswer = "z";
                stopTimer();
                chosenAnswer();
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
            if (timeUp) {
                $("#answer-yes-no").text("TIME IS UP").css({"color" : "#ff0000"});
            } else {
                $("#answer-yes-no").text("THAT IS WRONG!!!").css({"color": "#ff0000"});
            }
            answeredWrong++;
            timeUp = false;
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

        if (QandAindex === 0) {
            $("#answer-gif").attr("src", "assets/images/green_day.gif").css({"height" : "159", "width" : "300"});
        } else if (QandAindex === 1) {
            $("#answer-gif").attr("src", "assets/images/blur.gif").css({"height" : "300", "width" : "300"});
        } else if (QandAindex === 2) {
            $("#answer-gif").attr("src", "assets/images/smashing_pumpkins.gif").css({"height" : "169", "width" : "300"});
        } else if (QandAindex === 3) {
            $("#answer-gif").attr("src", "assets/images/courtney_love.gif").css({"height" : "190", "width" : "300"});
        } else if (QandAindex === 4) {
            $("#answer-gif").attr("src", "assets/images/silver_chair.gif").css({"height" : "217", "width" : "300"});
        } else if (QandAindex === 5) {
            $("#answer-gif").attr("src", "assets/images/pusa.gif").css({"height" : "223", "width" : "300"});
        } else if (QandAindex === 6) {
            $("#answer-gif").attr("src", "assets/images/seattle.gif").css({"height" : "200", "width" : "300"});
        } else if (QandAindex === 7) {
            $("#answer-gif").attr("src", "assets/images/nirvana.gif").css({"height" : "177", "width" : "300"});
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
        $(".display-answer").hide();
        $("#correct").text(answeredCorrectly);
        $("#wrong").text(answeredWrong);
        $(document).on("click", "#reset-btn" , function() {
            resetGame();
        })
    }

    function resetGame() {
        $(".gameover-screen").hide();
        $(".game-screen").show();
        $(".question-answer").show();
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