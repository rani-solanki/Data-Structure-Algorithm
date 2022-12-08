list1 = [1,2,3,-1,0,100]
list2 = [3,-1,100]
i=0
while((i<list2.length)){
    a = list1.indexOf(list2[i])
    b = list2.indexOf(list2[i])
    if (b<a){
        result = true
    }else{
        result = false
    }
    i++
}
console.log(result)
