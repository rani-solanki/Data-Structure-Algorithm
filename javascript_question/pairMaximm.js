var list1 = [2,3,4,7]
var list2 = [7,2,1,3]
var i = 0
while(i<list1.length){
  var j = 0;
  var a = 0;
  var b = 0;
  while(j < list2.length){
    if(a < list1[i]+list2[j]){
      a = (list1[i]+list2[j])
      b = list1[i]
      c = list2[j]
    }
    j=j+1
  }
  i=i+1
  console.log(a,"=",b,c)
}

