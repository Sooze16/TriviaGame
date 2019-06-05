$(document).ready(function() {

    //Begin by creating my variables and setting up my questions and answers.


    var trivaQuestion = [{

            prompt: "Who is the creator of the Peanuts comic strip?",
            answerArray: ["A. Walt Disney", "B. Charles M. Schultz", "C. Jim Davis", "D. Cathy Guisewite"],
            rightAnswer: "B. Charles M. Schultz",
            image: "./assets/images/CMS.gif"

        },

        {

            prompt: "What is the name of Charlie Brown's dog?",
            answerArray: ["A. Snoopy", "B. Goofy", "C. Lassie", "D. Sparky"],
            rightAnswer: "A. Snoopy",
            image: "assets/images/Snoopy.jpg"

        },

        {

            prompt: "What position did Charlie Brown play on his baseball team?",
            answerArray: ["A. Bat Boy", "B. First Base", "C. Right Field", "D. Pitcher"],
            rightAnswer: "D. Pitcher",
            image: "assets/images/pitcher.gif"

        },

        {

            prompt: "Who was Linus waiting for in the pumpkin patch on Halloween Night?",
            answerArray: ["A. The Great Pumpkin", "B. Santa Claus", "C. Charlie Brown", "D. The WWI Flying Ace"],
            rightAnswer: "A. The Great Pumpkin",
            image: "assets/images/greatp.gif"

        },

        {

            prompt: "Who is Schroeder's favorite music composer?",
            answerArray: ["A. Mozart", "B. Brahams", "C. Beethoven", "SnoopDog"],
            rightAnswer: "C. Beethoven",
            image: "assets/images/Beethoven.jpg"

        },

        {

            prompt: "Charles Shultz's uncle game him a nickname that stuck with him throught life - what was that?",
            answerArray: ["A. Spike", "B. Snoopy", "C. Sparky", "D. Chuck"],
            rightAnswer: "C. Sparky",
            image: "./assets/images/sparky.jpg"

        },

        {

            prompt: "Who composed the music for all of the Peanuts television specials?",
            answerArray: ["A. George Winston", "B. Bill Evans Trio", "C. David Benoit", "D. Vince Guaraldi"],
            rightAnswer: "D. Vince Guaraldi",
            image: "assets/images/vince.jpg"

        },

        {

            prompt: "How does Marcie refer to Peppermint Patty?",
            answerArray: ["A. Ma'am", "B. Ms. Peppermint", "C. P-Squared", "Sir"],
            rightAnswer: "D. Sir",
            image: "assets/images/sir.jpg"

        },

        {

            prompt: "Who is Snoopy's (The famous WWI Flying Ace) worst enemy?",
            answerArray: ["A. The Red Barron", "B. Mickey Mouse", "C. Woodstock", "D. Lucy "],
            rightAnswer: "A. The Red Barron",
            image: "assets/images/red barron.jpg"

        },

        {

            prompt: "How much does Lucy charge for psychiatric help?",
            answerArray: ["A. Free", "B. 5 Cents", "C. 10 cents", "D. 25 cents"],
            rightAnswer: "B. 5 Cents",
            image: "assets/images/doctor.gif"


        },

    ];

    var correctAnswer = 0;

    var wrongAnswer = 0;

    var unAnswered = 0;

    var timer = 5;

    var intervalId;

    var running = false;

    var qCount = trivaQuestion.length;

    var index = 0;

    var newArray = [];

    $("#reset").hide();

    //start game/ load questions and run timer

    $("#start").on("click", function() {
        console.log("start-button")
        $("#start").hide();
        displayQuestion();
        runTimer();

    })

    //timer action:
    function runTimer() {

        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;

        }

    }

    //clock countdown....
    function decrement() {
        $("#clock").html("<h3>Time Remaining: " + timer + "</h3>");
        timer--;

        if (timer === 0) {

            unAnswered++;
            stop();
            $("#answerBoard").append("<p> Time is up!  The correct answer is: " + [trivaQuestion.correctAnswer] + "</p>");
            hidepicture();
            index++;

        }


    }

    function stop() {
        running = false;
        timer = 5;
        clearInterval(intervalId);

    }


    function displayQuestion() {

        $("#questionBoard").append("<h2>" + trivaQuestion[index].prompt + "</h2>");
        for (var i = 0; i < trivaQuestion[index].answerArray.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerChoice");
            userChoice.append(trivaQuestion[index].answerArray[i]);
            userChoice.attr("data-guessValue", i);
            userChoice.attr("data-rightanswer", trivaQuestion[index].rightAnswer);
            $("#answerBoard").append(userChoice);
        }

    }

    //click on the line choices for answer and right or wrong notification

    $(document).on('click', ".answerChoice", function() {
        console.log($(this).attr('data-rightanswer'))
        if ($(this).text() === $(this).attr("data-rightanswer")) {
            console.log('correct');
            stop();
            correctAnswer++;
            $("#answerBoard").html("<p> Correct!!!! </p>");
            hidepicture();
            index++;
        } else {
            console.log('wrong');
            stop();
            wrongAnswer++;
            $("#answerBoard").html("<p> Sorry, The correct answer is:" + [trivaQuestion.rightAnswer] + " </p>");
            hidepicture();
            index++;
        }
    })

    function hidepicture() {
        console.log(trivaQuestion[index].image)
        $("#answerBoard").append(`<img src="${trivaQuestion[index].image}"/>`);
        newArray.push();

        var hidpic = function() {
            $("#answerBoard").empty();
            $("#questionBoard").empty();


            if ((wrongAnswer + correctAnswer + unAnswered) === qCount) {

                // $("#questionBoard").empty();
                $("#questionBoard").html("<h3>Game Over! This is how well you know The Peanuts Gang:</h3>");
                $("#answerBoard").append("<h4>Correct: " + correctAnswer + "</h4>");
                $("#answerBoard").append("<h4>Incorrect: " + wrongAnswer + "</h4>");
                $("#answerBoard").append("<h4>Unanswered: " + unAnswered + "</h4>");
                $("#reset").show();
                correctAnswer = 0;
                wrongAnswer = 0;
                unAnsered = 0;

            } else {
                runTimer();
                displayQuestion();
            }


        }

        setTimeout(hidpic, 3 * 1000)
            // hidpic();

    }

    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#answerBoard").empty();
        $("#questionBoard").empty();
        // for (var i = 0; i < trivaQuestion.length; i++) {
        //     trivaQuestion.push(trivaQuestion[i]);

        // }
        index = 0;
        runTimer()
        displayQuestion();

    })







});