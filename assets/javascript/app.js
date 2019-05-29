$(document).ready(function() {

    //Begin by creating my variables and setting up my questions and answers.


    var triviaQuestions = [{

            prompt: "Who is the creator of the Peanuts comic strip?",
            answerArray: ["A. Walt Disney", "B. Charles M. Schulz", "C. Jim Davis", "D. Cathy Guisewite"],
            rightAnswer: "B. Charles M. Schultz",
            image: "https://media.giphy.com/media/KrtoScj4fDsHK/giphy.gif"

        },

        {

            prompt: "What is the name of Charlie Brown's dog?",
            answerArray: ["A. Snoopy", "B. Goofy", "C. Lassie", "D. Sparky"],
            rightAnswer: "A. Snoopy",
            image: ""

        },

        {

            prompt: "What position did Charlie Brown play on his baseball team?",
            answerArray: ["A. Bat Boy", "B. First Base", "C. Right Field", "D. Pitcher"],
            rightAnswer: "D. Pitcher",
            image: ""

        },

        {

            prompt: "Who was Linus waiting for in the pumkin patch on Halloween Night?",
            answerArray: ["A. The Great Pumpkin", "B. Santa Claus", "C. Charlie Brown", "D. The WWI Flying Ace"],
            rightAnswer: "B. Charles M. Schultz",
            image: "https://media.giphy.com/media/5knp3kuvvvnW/giphy.gif"

        },

        {

            prompt: "The statue of what composer is on Schroeder piano?",
            answerArray: ["A. Mozart", "B. Brahams", "C. Beethoven", "SnoopDog"],
            rightAnswer: "C. Beethoven",
            image: ""

        },

        {

            prompt: "Charles Shultz's uncle game him a nickname that stuck with him throught life - what was that?",
            answerArray: ["A. Spike", "B. Snoopy", "C. Sparky", "D. Chuck"],
            rightAnswer: "C. Sparky",
            image: ""

        },

        {

            prompt: "What does Lucy tell Charlie Brown she would like for Christmas?",
            answerArray: ["A. Money", "B. Peace on Earth", "C. A dog", "D. Real Estate"],
            rightAnswer: "D. Real Estate",
            image: "https://media.giphy.com/media/gh4e2B446CvCw/giphy.gif"

        },

        {

            prompt: "How does Marcie refer to Peppermint Patty?",
            answerArray: ["A. Ma'am", "B. Ms. Peppermint", "C. P-Squared", "Sir"],
            rightAnswer: "D. Sir",
            image: ""

        },

        {

            prompt: "Who is Snoopy's (The famous WWI Flying Ace) worst enemy?",
            answerArray: ["A. The Red Barron", "B. Mickey Mouse", "C. Woodstock", "D. Lucy "],
            rightAnswer: "A. The Red Barron",
            image: ""

        },

        {

            prompt: "How much does Lucy charge for psychiatric help?",
            answerArray: ["A. Free", "B. 5 Cents", "C. 10 cents", "D. 25 cents"],
            rightAnswer: "B. 5 Cents",
            images: "https://media.giphy.com/media/BjD7keq3qEFZm/giphy.gif"


        },

    ];


    var correctAnswer = 0

    var wrongAnswer = 0

    var unAnswered = 0

    var userGuess = ""

    var intervalId;

    var timer;

    var index = 0

    //develop my on-click event and trigger the timer load first question and have the start button hide.



    $("#start-button").on("click",
        function() {
            $("#start-button").hide()
                // runTimer()
                // game start - load questions and set up gameboard with the questions and answers.
                // function game() 

            $("#questionBoard").html(triviaQuestions[index].prompt)
            for (var i = 0; i < triviaQuestions[index].answerArray.length; i++) {
                $("#answerBoard").append(
                    "<span guess_value='" + triviaQuestions[index].answerArray[i] + "'>" + triviaQuestions[index].answerArray[i] + "</span>" +
                    "<br>"
                )
            }
        })




    $("span").on("click", function() {
        userGuess = $(this).attr("guess_value");


        if (userGuess === rightAnswer) {
            stop();
            correctAnswer++;
            // userGuess = "";
            $("answerBoard").append("Correct!" + [triviaQuestions[index].image]);
            hidepicture();

        } else {
            stop();
            wrongAnswer++;
            // userGuess = "";
            $("#answerBoard").append("Wrong!" + [triviaQuestions[index].image]);
            hidepicture();


        }

    })

    // /timer start
    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }
    //timer countdown
    function decrement() {
        $("#clock").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;

        //stop timer if reach 0
        if (timer === 0) {
            unAnswered++;
            stop();
            $("#answerBoard").append("Time is up! The correct answer is: " + [rightAnswer.length]);
            hidepicture();
        }
    }

    //timer stop
    function stop() {
        running = false;
        clearInterval(intervalId);

    };




});