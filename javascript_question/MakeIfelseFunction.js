array = [2,4,3,22,5,11,6,8,9,1]
var i =0;
var list = [ ]
while(i<array.length){
    while(array[i]%2==0){
        list.push(array[i])
        break
    }
    i++
}
console.log(list)