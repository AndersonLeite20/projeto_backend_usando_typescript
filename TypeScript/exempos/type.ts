//DECLARAÇÕES

var somaforadoif:string = 'Henrrique Souza' 
var nomedentrodoescopo = 'Pedro lucas'
var check: boolean = false

var numbercheck: number = 100

if(check) {
    var nomedentrodoif = 'Mariana Albuqueerque'   
}else{
    nomedentrodoif = 'Maria Algusta'
}
console.log(somaforadoif)
console.log(nomedentrodoif.indexOf('Maria'))
console.log(nomedentrodoescopo.length)
    
//ARREYS

//Simtaxe
let nome:string[] = ['João', 'Maria', 'Raquel', 'Felipe'];
let totais:number[] = [10, -10, 20, 0, 50, 8];
let checs:boolean[] = [true, false, true, true, false];

//codigo mais legivel
let sobrenomes:Array<string> = ['Santos', 'Souza', 'Barata'];
let quantidade:Array<number> = [9, 7, 9, 1, 34];
let eaSting:Array<boolean> = [false, true, false, true, true];

console.log(nome)
console.log(totais)
console.log(checs)

//Nomes que ainda não exstem

//metodo push -> adiciona itens ao arrey
nome.push('lucas')
totais.push(0)
console.log(nome)
console.log(totais)

//Método POP -> remove o ultimo item do arrey
nome.pop()
totais.pop()
console.log(nome)
console.log(totais)

//Arrey de leitura -> não podem ser aterados os valores
let NumerosdaMega:Readonly<number[]> = [60, 45, 9, 7, 21, 3];

//Tuplas -> uma forma para conectar dados
let itens: [string, number] = ['feijão', 90];
let pessoa: [string, number, number] = ['Pedro', 35, 90];
let pessoa2: [nome:string, idade:number, altura:number] = ['Marcos', 20, 175];