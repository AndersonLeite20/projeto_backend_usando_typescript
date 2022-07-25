import { acount } from '../aconl';
import {IFisicPeople} from '../interfaces/fisic_interface';
import {IAcount} from '../interfaces/acount_interfaces'

export class fisicpeopleacount extends acount implements IAcount,IFisicPeople {
    //polimorfismo
    cpf: number;
    nome:string
    email:string

    constructor(
        cpf: number,
        name:string,
        email: string,
        nomeOfholder: string,
        amount: number,
    ) {
        super(cpf, nomeOfholder, amount,);
        this.cpf = cpf;
        this.nome = name
        this.email = email
    }
 }
