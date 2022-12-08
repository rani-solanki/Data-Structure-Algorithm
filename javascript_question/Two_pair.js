var number = [4,7,2,9,4,9,67,4]
var sum = 0
for(var i = 0; i<number.length;i++){
    for(var j = i+1; j<number.length; j++ ){
        num = number[i] + number[j]
        if (sum <= num){
            var a = number[i]
            var b = number[j]
            sum = num
        }
    }
}
console.log(a,"+",b, "=" ,sum)

