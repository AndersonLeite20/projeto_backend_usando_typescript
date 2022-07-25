import {acount} from '../aconl';
import {} from '../interfaces/juridique_people_interface';
import {IAcount} from '../interfaces/acount_interfaces';

export class IJuridiquePeople extends acount implements IAcount, IJuridiquePeople {
    //polimorfismo
    cnpj:number;
    nome:string
    email:string
    
    constructor(
        cnpj:number,
        
        nomeOfholder: string,
        amount: number,
    ){
        super(cnpj,nomeOfholder, amount)
        this.cnpj = cnpj;
        this.nome = nomeOfholder;
        this.email = this.email;
    }
    getcnpj():number{
        return this.cnpj
    }
}
