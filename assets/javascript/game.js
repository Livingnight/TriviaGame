$(document).ready(function(){
    
    var gameObj = {

        heading: $("<header>")
            .addClass("title")
            .text("Video Game Trivia"),
        noAnswer: $("<div>")
            .addClass("tooLong")
            .text("You Took Too Long! Try again"),
        interval: undefined,
        timeout: undefined,
        time: 30,
        correct: 0,
        incorrect: 0,
        count: 0,
        ansPicked: false,
        // correctSound: new sound("assets/sounds/Title_Theme.mp3"),

        // incorrectSound:
        startBtn: $("<button>")
            .addClass("start")
            .text("Start!"),
        startClicked: false,
        questions: [
            {
                question: "What was the first video game?",
                answers: ["pong", "Spacewar!", "Space Invaders", "Galaga"],
                correctAns: "pong",
                ansPic: $("<img>")
                .attr("src", "assets/images/pong.gif")
            },
            {
                question: "When was the first Legend of Zelda released?",
                answers: ["1975", "1982", "1986", "1977"],
                correctAns: "1986",
                ansPic: $("<img>")
                    .attr("src", "assets/images/Zelda-title-screen.gif")
            },
            {
                question: "What is the name of the world in Legend of Zelda?",
                answers: ["Azeroth", "Hyrule", "Tamriel", "Lordran"],
                correctAns: "Hyrule",
                ansPic: $("<img>")
                    .attr("src", "assets/images/Hyrule_Warriors_Stage_Hyrule_Field.jpg")
            }
        ]
    };
    // gameObj.startBtn = gameObj.startBtn.text("Start!")
    function first(){
        $(".mainBody").append(gameObj.heading, "<br>", gameObj.startBtn);
    }
    function setHeading(){
        $("body").append(gameObj.heading);
    }
    function setQuestion(){
        // $(".mainBody").append(
        //     gameObj.heading, "<br>");
        $(".mainBody")
            .append($("<div>")
                .addClass("question")
                .text(gameObj.questions[gameObj.count].question)
            );
    }

    function setAnswers(){
        for(var i = 0; i < gameObj.questions[gameObj.count].answers.length; i++){
            console.log("this is the answer to be logged: "+ i + " " + gameObj.questions[gameObj.count].answers[i]);
            $(".question").append(
                $("<div>").append(
                    $("<button>")
                        .addClass("answers")
                        .attr("value", gameObj.questions[gameObj.count].answers[i])
                        .text(gameObj.questions[gameObj.count].answers[i])
                )


            );
        }
    }
    function stop(){
        clearInterval(gameObj.interval)
    }
    function pageClear(){
        $(".mainBody").empty();
    }
    function timeOut(){
        game();
    }
    function countDown(){
        console.log(gameObj.time);
        gameObj.time--;
        gameObj.startClicked = true;
        if(gameObj.time === 0){
            tooLong();
        }
    }
    function tooLong(){
        stop();
        pageClear();
        $(".mainBody")
            .append(
                gameObj.noAnswer,
                gameObj.questions[gameObj.count].ansPic

            );
        console.log(gameObj.questions[gameObj.count].ansPic);
        gameObj.count++;
        gameObj.incorrect++;
        // $(".main").append()
    }
    function game(){
        // setHeading();
        console.log("this is an alert");
        gameObj.interval = setInterval(countDown, 1000);
        clearTimeout(gameObj.timeout);
        pageClear();
        setQuestion();
        console.log(" this is the length of answers: "+ gameObj.questions[gameObj.count].answers.length);
        console.log("this is the answers[0]: " + gameObj.questions[gameObj.count].answers[0]);
        setAnswers();
        $(document).on("click", ".answers", function(){
            stop();
            alert("the button was clicked");
            console.log("this is the value of what was clicked: " + $(this).val());
            if($(this).val() === gameObj.questions[gameObj.count].correctAns){
                gameObj.correct++;
                console.log("this is the # of answers that are correct: " + gameObj.correct);
                gameObj.count++;
                console.log("this is the game count: " + gameObj.count);
                gameObj.time = 30;
                gameObj.timeout = setTimeout(timeOut, 1000*5);
            }else{
                gameObj.incorrect++;
                console.log("this is the # of answers that are incorrect: " + gameObj.incorrect);
                gameObj.count++;
                console.log("this is the game count: " + gameObj.count);
                gameObj.time = 30;
                gameObj.timeout = setTimeout(timeOut, 1000*5);
            }
        });


    }




    function startGame () {
        first();
        $(".start").on("click", function () {
            setHeading();
            game();
        });

    }
    startGame();

    });
