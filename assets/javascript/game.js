$(document).ready(function(){
    
    var gameObj = {
        body: $(".mainBody"),
        div: $("<div>"),
        heading: $("<header>")
            .addClass("title")
            .text("Video Game Trivia"),
        noAnswer: $("<div>")
            .addClass("tooLong")
            .text("You Took Too Long! Try again"),
        interval: undefined,
        timeout: undefined,
        time: 10,
        correct: 0,
        incorrect: 0,
        count: 0,
        clickNum: 0,
        anscorrect: false,
        startBtn: $("<button>")
            .addClass("start")
            .text("Start!"),
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
                question: "What game put the Nintendo Gameboy on the map?",
                answers: ["Metroid II", "Super Mario Land", "Mega Man", "Tetris"],
                correctAns: "Tetris",
                ansPic: $("<img>")
                    .attr("src", "assets/images/")
            },
            {
                question: "What was the first game system ever created?",
                answers: ["Magnavox Odyssey", "Commodore 64", "Sega Genesis", "Atari 2600"],
                correctAns: "Magnavox Odyssey",
                ansPic: $("<img>")
                    .attr("src", "assets/images/Odyssey.jpg")
            },
            {
                question: "What company was nintendo's first real competition?",
                answers: ["Microsoft", "Sega", "Sony", "Atari"],
                correctAns: "Sega",
                ansPic: $("<img>")
                    .attr("src", "assets/images/sega.gif")
            },
            {
                question: "What was Sega's first mega-hit?",
                answers: ["Morpho Tripper", "Legend of Zapdos", "Murphy the Plumber", "Sonic the Hedgehog"],
                correctAns: "Sonic the Hedgehog",
                ansPic: $("<img>")
                    .attr("src", "assets/images/sonic.gif")
            },
            {
                question: "What game has sold the most copies ever?",
                answers: ["Tetris", "Super Mario Land", "PacMan", "Legend of Zelda"],
                correctAns: "Tetris",
                ansPic: $("<img>")
                    .attr("src", "assets/images/tetris.gif")
            },
            {
                question: "What game put the Nintendo Gameboy on the map?",
                answers: ["Metroid II", "Super Mario Land", "Mega Man", "Tetris"],
                correctAns: "Tetris",
                ansPic: $("<img>")
                    .attr("src", "assets/images/")
            },
            {
                question: "In what year was the Playstation released?",
                answers: ["2991", "2000", "1999", "1995"],
                correctAns: "1995",
                ansPic: $("<img>")
                    .attr("src", "assets/images/ps1.gif")
            },
            {
                question: "What is the name of the world in Legend of Zelda?",
                answers: ["Azeroth", "Hyrule", "Tamriel", "Lordran"],
                correctAns: "Hyrule",
                ansPic: $("<img>")
                    .attr("src", "assets/images/Hyrule_Warriors_Stage_Hyrule_Field.jpg")
            },
            {
                question: "What was the first system to use discs instead of cartridges?",
                answers: ["Saturn", "N64", "Playstation", ""],
                correctAns: "Hyrule",
                ansPic: $("<img>")
                    .attr("src", "assets/images/")
            },
            {
                question: "",
                answers: ["Azeroth", "Hyrule", "Tamriel", "Lordran"],
                correctAns: "Hyrule",
                ansPic: $("<img>")
                    .attr("src", "assets/images/")
            },
            {
                question: "",
                answers: ["Azeroth", "Hyrule", "Tamriel", "Lordran"],
                correctAns: "Hyrule",
                ansPic: $("<img>")
                    .attr("src", "assets/images/")
            },
            {
                question: "",
                answers: ["Azeroth", "Hyrule", "Tamriel", "Lordran"],
                correctAns: "Hyrule",
                ansPic: $("<img>")
                    .attr("src", "assets/images/")
            },
            {
                question: "",
                answers: ["Azeroth", "Hyrule", "Tamriel", "Lordran"],
                correctAns: "Hyrule",
                ansPic: $("<img>")
                    .attr("src", "assets/images/")
            },
            {
                question: "",
                answers: ["Azeroth", "Hyrule", "Tamriel", "Lordran"],
                correctAns: "Hyrule",
                ansPic: $("<img>")
                    .attr("src", "assets/images/")
            }
        ]
    };
    // gameObj.startBtn = gameObj.startBtn.text("Start!")
    function first(){
        pageClear();
        gameObj.body.append(gameObj.heading, "<br>", gameObj.startBtn);
    }
    function setHeading(){
        $(".header").append(gameObj.heading, "<br>");
    }
    function setQuestion(){
        $(".mainBody")
            .append($("<div>")
                .addClass("question")
                .text(gameObj.questions[gameObj.count].question)
            );
    }

    function setAnswers(){
        for(var i = 0; i < gameObj.questions[gameObj.count].answers.length; i++){
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
        console.log("stop function: " + gameObj.count);
        clearInterval(gameObj.interval);
        clearTimeout(gameObj.timeout);
    }
    function pageClear(){
        console.log("clear function: " + gameObj.count);
        gameObj.body.empty();
    }
    function timeOut(){
        console.log("timeout function: " + gameObj.count);
        stop();
        if(gameObj.count === gameObj.questions.length){
            tallyPage();
        }else{
        game();
        }
    }
    function countDown(){
        console.log("countDown function: " + gameObj.count);
        console.log(gameObj.time);
        gameObj.time--;
        gameObj.startClicked = true;
        if(gameObj.count === gameObj.questions.length){
            stop();
            tallyPage();
        }
        if(gameObj.time === 0){
            tooLong();
        }
    }
    function tallyPage(){
        pageClear();
        gameObj.body.append($("<div>")
            .addClass("")
            .html("<p>Here is the Final Tally!</p>"));
        gameObj.body.append($("<div>")
            .addClass("tooLong")
            .html("<p>Number Correct: " + gameObj.correct +"</p>"+
                "<p>Number Incorrect: " + gameObj.incorrect+ "</p>"));
        gameObj.body.append($("<button>")
            .addClass("reset")
            .text("Reset!"))
    }
    function picture(){
        console.log("picture function: " + gameObj.count);
        console.log("this is the game count: " + gameObj.count);
        gameObj.time = 30;
        pageClear();
        if(gameObj.anscorrect === true){
            if(gameObj.count === gameObj.questions.length){
                tallyPage();
            }
            gameObj.body.append(gameObj.div.html("<p>Your answer is correct!</p>"))
        }else {
            if (gameObj.count === gameObj.questions.length) {
                tallyPage();
            }
            gameObj.body.append(gameObj.div.html("<p>You answered Incorrectly! the correct answer was " +
                gameObj.questions[gameObj.count].correctAns + "</p>"));

        }
        gameObj.body.append(
            gameObj.questions[gameObj.count].ansPic
        );
        gameObj.count++;
        gameObj.timeout = setTimeout(timeOut, 1000*5);
    }
    function tooLong(){
        console.log("too long function: " + gameObj.count);
        stop();
        pageClear();
        gameObj.count++;
        if(gameObj.count === gameObj.questions.length) {
            gameObj.incorrect++;
            tallyPage();
        }else{
            gameObj.body
                .append(
                    gameObj.noAnswer,
                    gameObj.questions[gameObj.count-1].ansPic
                );
            console.log(gameObj.questions[gameObj.count-1].ansPic);

            gameObj.incorrect++;
            setTimeout(game, 1000 * 5);
        }
    }
    function reset(){
        gameObj.interval = undefined;
        gameObj.timeout = undefined;
        gameObj.time = 10;
        gameObj.correct = 0;
        gameObj.incorrect = 0;
        gameObj.count = 0;
        gameObj.clickNum = 0;
        gameObj.anscorrect = false;
        first();
    }
    function game(){
        // debugger;
        gameObj.anscorrect = false;
        console.log("game function: " + gameObj.count);
        console.log("this is an alert");
        // stop();
        gameObj.time = 10;
        gameObj.interval = setInterval(countDown, 1000);
        pageClear();
        setQuestion();
        // console.log(" this is the length of answers: "+ gameObj.questions[gameObj.count].answers.length);
        // console.log("this is the answers[0]: " + gameObj.questions[gameObj.count].answers[0]);
        setAnswers();
    }
    setHeading();
    first();

    $(document).on("click", ".start", function () {
        setHeading();
        game();
    });
    $(document).on("click", ".answers", function () {
        stop();
        console.log("answer buttons clicked: " + gameObj.clickNum);
        gameObj.clickNum++;
        console.log("this is the value of what was clicked: " + $(this).val());
        if ($(this).val() === gameObj.questions[gameObj.count].correctAns) {
            gameObj.correct++;
            gameObj.anscorrect = true;
            console.log("this is the # of answers that are correct: " + gameObj.correct);
            picture();
        } else {
            gameObj.incorrect++;
            console.log("this is the # of answers that are incorrect: " + gameObj.incorrect);
            picture();
        }
        });
    $(document).on("click", ".reset", function () {
            reset();
        })

});
