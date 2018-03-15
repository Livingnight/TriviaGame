$(document).ready(function(){
    
    var gameObj = {

        heading: $("<header>").text("Video Game Trivia"),
        interval: undefined,
        time: 30,
        correct: 0,
        incorrect: 0,
        count: 0,
        timeRunning: false,
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
    function setQuestion(){
        $(".mainBody").append(gameObj.heading, "<br>");
        $(".mainBody").append($("<div>").text(gameObj.questions[gameObj.count].question));
    }

    function setAnswers(){
        for(var i = 0; i < gameObj.questions[gameObj.count].answers.length; i++){
            $("div").append($("<div>").text(gameObj.questions[gameObj.count].answers[i]));
        }
    }
    function stop(){
        clearInterval(gameObj.interval)
    }
    function pageClear(){
        $(".mainBody").empty();
    }
    function countDown(){
        console.log(gameObj.time);
        gameObj.time--;
        gameObj.interval = setInterval(countDown, 1000);
    }

    function startGame () {
        $("button").on("click", function () {


            console.log("this is an alert");
            pageClear();
            countDown()
            // reset();

            // $(".mainBody").append()
            setQuestion();
            console.log(" this is the length of answers: "+gameObj.questions[gameObj.count].answers.length);
            console.log("this is the answers[0]: " + gameObj.questions[gameObj.count].answers[0]);
            debugger;
            setAnswers();


        })


    }
    reset();
    startGame();
});

