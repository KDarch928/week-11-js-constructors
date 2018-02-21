// var Letter = function (word) {
//     this.word = word;
//     this.displayedWord; //this will be used to display the letter or underscores
//     this.checker = false;
//     this.guessLetter = "";
//     this.letterCheker = "";
//     this.underlyingChar = function () {
//         //TODO
//         //if true then check the word and return with the underscores with the letter guessed
//         this.displayedWord = "";
//         for(var i = 0; i < word.length; i++){
//             if (word[i] === " " ){
//                 this.displayedWord += " ";
//             } else if (word[i] === this.guessLetter){
//                 this.displayedWord += this.guessLetter;
//             } else if (word[i] === this.letterCheker[i]){
//                 this.displayedWord += this.letterCheker[i];
//             } else {
//                 this.displayedWord += "_";
//             }
//         }
//         this.letterCheker = this.displayedWord;
//         this.checker = false;
//         console.log(this.displayedWord);
//     }
//     this.charChecker = function (guessedLetter) {
//         //TODO
//
//         //check the guessed letter against the stored word
//         for(var i = 0; i < word.length; i++){
//             //if the letter matches a letter in the word, then set the checker to true and assign the letter to guessLetter
//             if (word[i] === guessedLetter) {
//                 this.checker = true;
//                 this.guessLetter = guessedLetter;
//             }
//         }
//
//         //if it true, then set the checker boolean to true and run the underlyingChar function
//         //otherwise display the current displayedWord var.
//         if(this.checker) {
//             this.underlyingChar();
//         } else {
//             console.log("this is false");
//             console.log(this.displayedWord);
//         }
//
//
//     }
// }

var Letter = function (letter) {
    this.letter = letter; //hold the letter
    this.checker = false;
    this.underlyingChar = function (){
        //if true, then set the checker to false and return the letter that has be guessed
        // Otherwise return an underscore) if the letter has not been guessed
        if(this.checker) {
            this.checker = false;
            return this.letter + " ";
            console.log(this.letter);
        } else if (this.letter === " "){
            return "  ";
            console.log(" ");
        } else {
            return "_ ";
            console.log("_ ");
        }
    }
    this.charChecker = function (guessedLetter) {
        //if the guessed letter is guessed, then set the checker to true
        if(guessedLetter === this.letter) {
            this.checker = true;
        }
        //run the underlaying character
        // this.underlyingChar();
    }

}


//exporting the Letter constructor
module.exports =  Letter;

// var w = new Letter("j");


// w.charChecker("M");
//
//
// w.charChecker("e");
//
//
//
// w.charChecker("j");
//
// w.charChecker("l");
//
// w.charChecker("m");

