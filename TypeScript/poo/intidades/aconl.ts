//atributos
export abstract class acount {
    private readonly _nunberOFAcount:number
    nomeOfholder:string
    private _amount:number

    //construtor
    
    constructor(
        nunberOFAcount: number,
        nomeOfholder: string,
        amount: number,
    ){
        this._nunberOFAcount = this.generatenuberOfacount()
        this.nomeOfholder = nomeOfholder
        this._amount = amount
    }
    getAmount():number {
        return this._amount
    }
    getNunberOfacount():number{
        return this._nunberOFAcount
    }
    //métodos
    protected generatenuberOfacount():number{
        return Math.floor(Math.random()*1000)+1
    }
    opemAcount():boolean {
        if(this._nunberOFAcount != null){
            return true
        }else{
            return false
        }
    }
    consultaomnt():string {
        let response = `Seu saldo atual é ${this._amount}`
        console.log(response)
        return response
    }
    adicionarVaoramount(value:number):void {
        this._amount = this._amount + value
        console.log(this._amount)
    }
    removeValueOfamount(value:number):boolean {
        if(this._amount < 0){
            console.log('ERRO: Voçê não possui saldo.')
            return false
        }else if(value > this._amount){
            console.log('ERRO: Saldo insuficiente.')
            return false 
        }else{
            this._amount -= value
            console.log('Operação realizada!')
            return true
        } 
    }
}