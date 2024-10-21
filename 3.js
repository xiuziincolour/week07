const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the appropriate message for a person based on their age regarding gym membership options.

- If the person is under 12, they should be told "too young for membership".
- If they are between 12 and 15, they should be told "eligible for junior membership".
- If they are between 16 and 59, they should be told "eligible for standard membership".
- If they are 60 or older, they should be told "eligible for senior membership".

*/
//determine a proper parameter variable name
function CheckGymMembershipEligibility(age){

  /*planning and design*/
//The function will accept the person's age as an argument
//The question should be "We need to know your age then we will know which membership you are going to get."
//If the person is under 12, it should show "You are too young for membership."
//If they are between 12 and 15, it should show "You are eligible for junior membership."
//If they are between 16 and 59, it should show "You are eligible for standard membership."
//If they are 60 or older, they it should show "You are eligible for senior membership"

if (age <= 12){
  console.log("You are too young for membership.");
}
else if (age> 12 && age <= 15){
  console.log("You are eligible for junior membership.");
}
else if (age>= 16 && age <= 59){
  console.log("You are eligible for standard membership.");
}
else if (age>= 60 ){
  console.log("You are eligible for senior membership.");
}
}

function StartApp(){
  readline.question('We need to know your age then we will know which membership you are going to get.', _age => {

      //the function.
      CheckGymMembershipEligibility(Number(_age))
    // readline.close();
    if(_age !== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();