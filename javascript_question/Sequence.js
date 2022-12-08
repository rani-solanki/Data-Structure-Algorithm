var list1 = [1,2,3,4,5,6,7,8,9]
var list2 = [2,3,4,5,6,7,8]
function Sequence(list1,list2){
    var i = 0;
    var max = 0;
    while(i<list1.length){
        var j =0;
        while(j<list2.length){
            if(max <= list2[j]){
                max = list2[j];
            }else{
                return false;
            }
            j++
        }
        i++
        break
    }
    return "true";
}
console.log(Sequence(list1,list2))