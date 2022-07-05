'use strict';


let userName = prompt("Please enter your name");
let gender = prompt("Please enter your gender","male/female");
let age = prompt("Please enter your age");

if (age <= 0) {
    alert("Please write your age corectly ");
    prompt("Please enter your age again");
}


if (confirm("Do you like to see the welcoming message")) {
    if (gender === "male")
       alert("Weclcom Mr " + userName);
   else if (gender == "female")
       alert("Weclcom Ms " + userName);
    else
       alert('Weclcom ' + userName);
} else {
    console.log("The user does not want to see the welcome message");
}

  const userAnswer = [];  
  userAnswer[0] = prompt("Do you finish your tasks today?","Yes/No");
  userAnswer[1] = prompt("Did you do some exercise today?","Yes/No");
  userAnswer[2] = prompt("Do you drink enough water?","Yes/No");

  for (let i=0; i<=2; i++){
    if (userAnswer[i] === null || userAnswer[i] === "")
    userAnswer[i] = "invalid";
  }
  console.log(userAnswer);
  


