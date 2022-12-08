function myDisplayer(some) {
    console.log(some)
  }
  function Addition(num1, num2){
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
function student(marks){
    console.log(marks,"%")
    console.log(marks)
}
function Mathstudent(num1){
    let percentage = num1/5
    student(percentage)
}
function Univercity(place){
    let Inwhichplace = place;
    Univercity(Inwhichplace)
}
const fs = require("readline-sync");
var user = fs.question("enter the number")
Univercity(user)
Mathstudent(90)
