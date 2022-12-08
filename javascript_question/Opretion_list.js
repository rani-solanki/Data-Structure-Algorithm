function operation(list1, list2, isUnion) {
    var result = [];

    for(var i = 0; i<list1.length; i++) {
        var elem = list1[i];
            bo = false;
        for (var j =0; j < list2.length; j++){
            // if (!bo){
            bo = list1[i].userId === list2[j].userId;
            }
        }
        if(bo ===!!isUnion){
            result.push(elem)
       }
    }
    return result
var list1 = [
    { userId: 1234, userName: 'XYZ'  }, 
    { userId: 1235, userName: 'ABC'  }, 
    { userId: 1236, userName: 'IJKL' },
    { userId: 1237, userName: 'WXYZ' }, 
    { userId: 1238, userName: 'LMNO' }
];
var list2 = [
    { userId: 1235, userName: 'ABC'  },  
    { userId: 1236, userName: 'IJKL' },
    { userId: 1252, userName: 'AAAA' }
];

console.log(operation(list1,list2,true))