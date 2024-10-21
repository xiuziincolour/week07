const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the type of movie ticket a person should purchase based on their age.
- If the person is under 5, they should be given a "free" ticket.
- If they are between 5 and 12, they should be given a "child" ticket.
- If they are between 13 and 17, they should be given a "teen" ticket.
- If they are between 18 and 64, they should be given an "adult" ticket.
- If they are 65 or older, they should be given a "senior" ticket.
*/

//determine a proper parameter variable name
function DetermineTicketType(age){

/*planning and design*/
//The function will accept the person's age as an argument
//The question should be "We need to know your age then we will know which ticket i should give it to you."
//If the person is under 5, it should show "Here is your Free ticket."
//If they are between 5 and 12, it should show "Here is your Child ticket."
//If they are between 13 and 17, it should show "Here is your Teen ticket."
//If they are between 18 and 64, it should show "Here is your Adult ticket."
//If they are 65 or older, they it should show "Here is your Senior ticket."

if (age<= 5){
  console.log("Here is your Free ticket.");
}
else if (age>5 && age<= 12){
  console.log("Here is your Child ticket.");
}
else if (age>13 && age<= 17){
  console.log("Here is your Teen ticket.");
}
else if (age>=18 && age<= 64){
  console.log("Here is your Adult ticket.");
}
else if (age=>65){
  console.log("Here is your Senior ticket.");
}
}

//ask the question
function StartApp(){
  readline.question('We need to know your age then we will know which ticket i should give it to you. ', _age => {

    //the function.
    DetermineTicketType(Number(_age));
    // readline.close();

    if(_age !== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();