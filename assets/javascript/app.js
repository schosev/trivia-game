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
            "The album 'Parklife' by Blur was first released in which year?"];
    var AnswerA = ["1994", "1993"];
    var AnswerB = ["1995", "1994"];
    var AnswerC = ["1996", "1995"];
    var AnswerD = ["1997", "1996"];
        
    function selectQandA() {
        //for (var i=0; i<questionAnswerArray.length; i++) {
           // console.log("array length: " + questionAnswerArray.length);
            
            // $("#question").text(questionAnswerArray[i].qAndA1.question1);
            // $("#answer-a").text(questionAnswerArray[i].qAndA1.q1AnswerA);
            // $("#answer-b").text(questionAnswerArray[i].qAndA1.q1AnswerB);
            // $("#answer-c").text(questionAnswerArray[i].qAndA1.q1AnswerC);
            // $("#answer-d").text(questionAnswerArray[i].qAndA1.q1AnswerD);
        //}
        for (var q=0; q<question.length; q++) {
            $("#question").text(question[q]);
        }
        for (var a=0; a<AnswerA.length; a++) {
            $("#answer-a").text(AnswerA[a]);
        }
        for (var b=0; b<AnswerB.length; b++) {
            $("#answer-b").text(AnswerB[b]);
        }
        for (var c=0; c<AnswerC.length; c++) {
            $("#answer-c").text(AnswerC[c]);
        }
        for (var d=0; d<AnswerD.length; d++) {
            $("#answer-d").text(AnswerD[d]);
        }
    }

    selectQandA();

})();