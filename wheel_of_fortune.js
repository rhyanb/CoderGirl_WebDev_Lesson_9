var word = "CODERGIRL";
var answerArray = []
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
var guess = prompt("Guess a CAPITAL letter, keep going until you guess the solution!");
if (guess === null) {
    break;
} 
else if (guess.length !== 1) {
    alert("Feeling lucky huh?")
//need to figure out how to incorporate the palyer guessing the solution

}
else {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray [j] = guess;
            remainingLetters--;
        }
    }
}
}
alert (answerArray.join (" "));
alert(" Whoo-hoo..Go You! The answer was " + word)
