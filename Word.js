//accessing the Letter.js constructor
var Letter = require("./Letter");

//word constructor
var Word = function () {
    //an array to hold the each letter in the word
    this.letterArr = [];

    //a string place holder
    this.str = "";

    //a string used to display back to the user
    this.displayStr = "";

    //function to add the word and push each letter into the letterArr
    this.addWord = function (word) {
        for (var i = 0; i < word.length; i++){
            this.letterArr.push(new Letter(word[i]));
        }
    }

    //function set the display string with the original returned string which are all underscores
    this.setDisplayStr = function () {
        //if the displayStr is empty, then update it with the original string returned, i.e., "_ _ _"
        if (this.displayStr === ""){
            this.displayStr = this.str;
        }
    }

    //function compares two string and updates the display string with guessed letters
    this.updateDisplayStr = function () {

        //loop through display string and compare it again the newly built string from the users guess
        for (var j = 0; j < this.displayStr.length; j++){
            //if the newly returned has a letter, update the current position in the display string with the guessed
            // letter in that position
            if (this.str[j] !== "_" && this.str[j] !== " "){
                this.displayStr = this.setCharAt(this.displayStr, j, this.str[j]);
            }
        }
    }

    //function return a build string to display to the user
    this.returnString = function () {
        //TODO
        //reset the str place holder
        this.str = "";

        //loops through the letter array and run the underlayingChar function in Letter.js to obtain the return string
        //for that letter, then adds it to the str variable
        for (var i = 0; i < this.letterArr.length; i++){
            var l = this.letterArr[i].underlyingChar();
            this.str += l;
        }

        //run the setDisplayStr function
        this.setDisplayStr();
        //run the updateDsiplayStr function
        this.updateDisplayStr();

        console.log(this.displayStr);
        return this.displayStr;
    }

    //function to get the strings current string, the index, and the char that will be replacing the char in the
    //index of the original string
    this.setCharAt = function (str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }

    //function take the guess letter from the user and goes through the letter array to use the compare function in
    //letters.js
    this.guess = function (guessedLetter) {

        for (var item in this.letterArr) {
            this.letterArr[item].compare(guessedLetter);
        }
    }

};

//exporting the Word constructor
module.exports = Word;

var newWord = new Word()

newWord.addWord("Man of Steel");
newWord.returnString();

newWord.guess("j");
newWord.returnString();

newWord.guess("M");
newWord.returnString();

newWord.guess("f");
newWord.returnString();

newWord.guess("e");
newWord.returnString();

newWord.guess("a");
newWord.returnString();

