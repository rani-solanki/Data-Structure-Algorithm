// Generic helper function that can be used for the three operations:        
function operation(list1, list2, isUnion) {
    var result = [];
    
    for (var i = 0; i < list1.length; i++) {
        var item1 = list1[i],
            found = false;
        for (var j = 0; j < list2.length && !found; j++) {
            found = item1.userId === list2[j].userId;
        }
        if (found === !!isUnion) { //isUnion is coerced to boolean
            result.push(item1);
        }
    }
    return result;
}
// Following functions are to be used:
function inBoth(list1, list2) {
    return operation(list1, list2, true);
}

function inFirstOnly(list1, list2) {
    return operation(list1, list2);
}

function inSecondOnly(list1, list2) {
    return inFirstOnly(list2, list1);
}

// Sample data
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
  
console.log('inBoth:', inBoth(list1, list2)); 
console.log('inFirstOnly:', inFirstOnly(list1, list2)); 
console.log('inSecondOnly:', inSecondOnly(list1, list2)); 