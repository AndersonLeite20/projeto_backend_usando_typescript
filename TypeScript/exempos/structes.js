/*function verifiqueidade(age:number):boolean{
    if(age > 18){
        return true
    } else {
        return false
    }
}*/
function candidatos(candidato) {
    switch (candidato) {
        case 10:
            return 'Lulinha';
            break;
        case 22:
            return 'Jairzino';
            break;
        case 40:
            return 'Cirock';
            break;
        default:
            return 'Voto nulo';
    }
}
console.log(candidatos(10));
console.log(candidatos(22));
console.log(candidatos(40));
console.log(candidatos(0));
console.log(candidatos(15));
console.log(candidatos(99));
//let idade:boolean = verifiqueidade(16)
//console.log(idade)
