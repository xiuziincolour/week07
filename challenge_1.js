const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*

Create a function that simulates a simple math quiz game. The function will take in two numbers and an operator (+, -, *, /) as parameters. 
It will then calculate the correct answer and compare it to the user's guess.

- If the user's guess is correct, display "Correct!"
- If the user's guess is incorrect, display "Incorrect!" and provide the correct answer.

BONUS:
- If the user's guess is within 5 of the correct answer, display "Very Close!"
- If the user's guess is within 2 of the correct answer, display "Almost Correct!"

BONUS 2x DIFFICULTY:
- Set a variable outside the function to limit the number of attempts allowed.
- Track the number of attempts made with a variable starting at 0.
- Each time the function runs, increment the number of attempts made.
- If the number of attempts made reaches the limit, display "No more attempts left!" and end the game.

*/

//determine a proper parameter variable name
function MathGame(paramNumber1, paramNumber2, paramOperator, paramGuess) {
let number1 = paramNumber1
let number2 = paramNumber2
let operator = paramOperator
let guess = paramGuess

  /*
  number1 variable
  number2 variable
  answer variable
  answer = number1+number2
  guess === answer then we say correct otherwise we say incorrect
  
  if incorrect then check how close
  guess < answer+5 && guess > answer-5
5，10，0 => guess < 10 && guess> 0, 1,2,3 they will all say almost

  */

 let answer = 0;
if (operator === "+"){
  answer = number1+number2;
}
else if (operator === "-") {
  answer = number1-number2;
}
else if (operator === "*"){
  answer = number1*number2;
}

 //console.log("what is answer?", answer)
 if (guess === answer){
  console.log("correct");
}
 else {
  console.log("incorrect");

  if (guess > answer-5 && guess < answer +5){
    console.log("very close!");}

  else if(guess > answer-2 && guess < answer+2){
    console.log("almost there")
  }
  } 
}


let tries = 0;

//determine a proper question to ask and the proper variable name for the answer
readline.question("type the first number for the equation", (number1) => {
  readline.question("type the second number for the equation", (number2) => {
    readline.question("use the operator + or - or * ", (operator) => {
      //make an infinite recall for guessing question
      function StartGame() {
    
        //determine a proper question to ask and the proper variable name for the user to guess
        readline.question("Guess the number. ", (guess) => {
          
          //call your function here
          tries = tries+1;
          MathGame(Number(number1), Number(number2), operator, Number(guess))
    
          if (guess === "quit") {
            readline.close();
          } 
          if (tries > 5){
            console.log("No more attempts left")
            readline.close();
          }
          else {
            StartGame();
          }
        });
      }
    
      StartGame();
    })
  })
});
