var linguagems:Array<string> = ['c#', 'avascript', 'java', 'php', 'phython', 'typescript', 'dart',]
/*
for(let i = 0;i < linguagems.length ;i++){
    console.log(linguagems[i])
}

let count = 0
while(count < linguagems.length){
    console.log(linguagems[count])
        count++
}*/
linguagems.forEach(item => {
    if (item == 'typescript'){
        return console.log('emcontrou!')
    }
    console.log(item)
})