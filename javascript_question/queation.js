function greet(name, callback,callback2) {
    setTimeout (function(){
        console.log('Hi' + ' @ ' + name);
    callback();
    const fs = require("readline-sync");
    var user = fs.question("entre the year");
    callback2( user);

    },1000)
}
// callback function
function callMe( ){
    setTimeout(function(){
        console.log('* sum of number 1 to 10');
        var i =0;
        var sum = 0;
        while(i<10){
            sum = sum+i
            i++
        }
        console.log(sum)

    },3000)
}
function student(year){
    console.log("* Find the leap year ")
    if (year%4==0 && year%100!=0){
        console.log("it is leap year =>",year)
    }else if(year%400==0){
        console.log("it is leap year =>",year)
    }else{
        console.log("it is normal year =>",year)
    }
    
}
// passing function as an argument
greet('Rani Solanki',callMe, student);