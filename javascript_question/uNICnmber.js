var Arr =  [7,3,8,9,79,13,23,27]
var Arr =  [2,4,6,8,9,64,90,24]
var i = 0;
var list1 = [ ] 
var list2 = [ ]
while(i<Arr.length){
    if(Arr[i]%2==0){
        list1.push(Arr[i])
    }else{
        list2.push(Arr[i])
    }
    i++
}
var stringArray = new Array(list1[0]);
if (list1[0] == list1){
  console.log(list1[0],"it is even number")
}else{
  console.log(list2[0],"it is odd number")
}








