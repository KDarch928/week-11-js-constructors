var Letter = require("./Letter");

var Word = function () {
    this.letterArr = [];
    this.str = "";
    this.displayStr = "";
    this.addWord = function (word) {
        for (var i = 0; i < word.length; i++){
            this.letterArr.push(new Letter(word[i]));
        }
    }
    this.returnString = function () {
        //TODO
        this.str = "";
        for (var i = 0; i < this.letterArr.length; i++){
            var l = this.letterArr[i].underlyingChar();
            this.str += l;
        }

        if (this.displayStr === ""){
            this.displayStr = this.str;
        }

        for (var j = 0; j < this.displayStr.length; j++){
            if (this.str[j] !== "_" && this.str[j] !== " "){
                this.displayStr = this.setCharAt(this.displayStr, j, this.str[j]);
            }
        }
        console.log(this.displayStr);
    }
    this.setCharAt = function (str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    this.guess = function (guessedLetter) {

        for (var item in this.letterArr) {
            this.letterArr[item].charChecker(guessedLetter);
        }
    }

};

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

