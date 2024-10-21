const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the appropriate message for a person based on their age regarding driving privileges.

- If the person is under 16, they should be told "too young to drive".
- If they are between 16 and 17, they should be told "can drive with supervision".
- If they are between 18 and 70, they should be told "can drive freely".
- If they are over 70, they should be advised to "consider a driving assessment".
*/

//determine a proper parameter variable name



function CheckDrivingAge(age){

/*planning and design*/
//The function will accept the person's age as an argument
//The question should be "I want to check if you are old enough to drive, please tell me your age."
//if they are under 16 they should be told "You are too young to drive."
//if they are between 16 and 17, they should be told “You should drive with supervison.”
//if they are between 18 and 70, they should be told "You can drive with no problem!"
//if they are over 70, they should be told "You need to take a dirving assessment."
if (age<= 16){
console.log("You are too young to drive.");
}
else if (age > 16 && age <= 17){ 
  console.log("You should to drive with supervison.");
}
else if (age >=18 && age <= 70){ 
  console.log("You can drive with no problem!");
}
else if (age >70){
  console.log("You need to take a dirving assessment.");
}

}

//ask the question

function StartApp(){
  readline.question('I want to check if you are old enough to drive, please tell me your age. ', age => {

   CheckDrivingAge(Number(age));
    
    // readline.close();
    if(age== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();