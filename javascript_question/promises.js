var d = function(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            var a = 9;
            var b = 18;
            if (a+b == a+b){
                resolve("yes i did");
        }else{
            reject("sorry yarr")
        }
        }, 1000);

    })
}
d().then(function(sentence){
    console.log(sentence)
}).catch(function(sentence){
    console.log(sentence)
})
