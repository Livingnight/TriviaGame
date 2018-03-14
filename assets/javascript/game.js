$(document).ready(function(){
    
    var gameObj = {

        heading: $("<header>").text("Video Game Trivia"),
        time: 30,
        correct: 0,
        incorrect: 0,
        count: 0,
        // correctSound: new sound("assets/sounds/Title_Theme.mp3"),

        // incorrectSound:
        button: $("<button>").text("Start!"),
        startClicked: false,
        questions: [
            {
            question: "What was the first video game?",
            answers: ["pong", "Spacewar!", "Space Invaders", "Galaga"],
            type: true,
            ansPic: $("<img>")
                .attr("src", "assets/images/pong.gif"),
            }
        ]
    };
    // gameObj.button = gameObj.button.text("Start!")
    function reset(){
        $(".mainBody").append(gameObj.heading, "<br>", gameObj.button);
    }
    function countDown(){

        gameObj.time--;
        console.log(gameObj.time);
    }

    function startGame () {
        $("button").on("click", function () {

            setInterval(countDown, 1000);


            console.log("this is an alert");
            $(".mainBody").empty();

            $(".mainBody").append(gameObj.heading, "<br>");

            // $(".mainBody").append()

            $(".mainBody").append($("<div>").text(gameObj.questions[gameObj.count].question));
            console.log(" this is the length of answers: "+gameObj.questions[gameObj.count].answers.length);
            console.log("this is the answers[0]: " + gameObj.questions[gameObj.count].answers[0]);
            for(var i = 0; i < gameObj.questions[gameObj.count].answers.length; i++){
                $("<div>").append(gameObj.questions[gameObj.count].answers[i]);
            }


        })


    }
    reset();
    startGame();
});

