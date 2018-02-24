//accessing the Word.js constructor
var Word = require("./Word");
var inquirer = require("inquirer");

//guess counter
var guessLeftCounter = 10;

var play = true;

var wordTracker = 0;

var word;

//word array
var wordArr = ["Willis Tower", "John Hancock", "Aon Center", "Merchandise Mart", "Chicago Board of Trade", "Marina City", "Tribune Tower", "Wrigley Building", "Aqua"];


function checkDisplayScreenWord() {

    if (word.displayStr.indexOf("_") > -1 ){
        play = true;
    } else {
        play = false;
    }

}
function Play() {
    checkDisplayScreenWord();
    if (guessLeftCounter > 0 && play === true) {
        inquirer.prompt([{
            type: "input",
            message: "Guess a letter: ",
            name: "letterGuess"
        }]).then(function (answer) {

                word.guess(answer.letterGuess);
                word.returnString();
                if(word.userGuessRightOrWrong === "correct"){
                    console.log("\n");
                    console.log("\x1b[32m%s\x1b[0m", word.userGuessRightOrWrong);
                } else {
                    console.log("\n");
                    console.log("\x1b[31m%s\x1b[0m", word.userGuessRightOrWrong);
                    guessLeftCounter -= 1;
                    console.log(guessLeftCounter + " guesses remaining!!!")
                }

                Play();

        });
    } else {
        if( guessLeftCounter === 0){
            console.log("\nThe word you missed was " + wordArr[wordTracker])
            play = true;
            guessLeftCounter = 10;
            wordTracker++;
            if (wordTracker === wordArr.length){
                End();
            } else {
                console.log("Better Luck with the Next Word!!");
                Start();
            }
        }  else {
            play = true;
            guessLeftCounter = 10;
            wordTracker++;
            if (wordTracker === wordArr.length){
                console.log("You got it right!!");
                End();
            } else {
                console.log("You got it right!! Next Word!");
                Start();
            }
        }

    }
}

function End() {
    console.log("Thank you for playing");
}

function Start() {
    if (wordTracker > 0){
        word = new Word();
        var currWord = wordArr[wordTracker];
        word.addWord(currWord);
        word.returnString();
        Play();
    } else {
        console.log("Welcome to Famous Chicago Buildings Hangman Game!")
        var currWord = wordArr[wordTracker];
        console.log(wordArr.length);
        word = new Word();
        word.addWord(currWord)
        word.returnString();
        Play();
    }

}



Start();
