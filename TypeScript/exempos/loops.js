var linguagems = ['c#', 'avascript', 'java', 'php', 'phython', 'typescript', 'dart',];
/*
for(let i = 0;i < linguagems.length ;i++){
    console.log(linguagems[i])
}

let count = 0
while(count < linguagems.length){
    console.log(linguagems[count])
        count++
}*/
linguagems.forEach(function (item) {
    if (item == 'typescript') {
        return console.log('emcontrou!');
    }
    console.log(item);
});
