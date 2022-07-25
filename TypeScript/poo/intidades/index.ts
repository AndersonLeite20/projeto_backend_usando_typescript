import { IJuridiquePeople } from '../intidades/pj/juridica';
import { fisicpeopleacount } from '../intidades/pf/fisica';

const pedrosAcount = new fisicpeopleacount(
    12349590461,
    'Pedro Lucas',
    'pedro@email.com',
    'Pedro',
    0,
)
pedrosAcount.consultaomnt()
pedrosAcount.adicionarVaoramount(5000)
pedrosAcount.consultaomnt()
pedrosAcount.removeValueOfamount(1)

console.log(pedrosAcount.getAmount())
console.log(pedrosAcount.getNunberOfacount())

const newtabaconunt = new IJuridiquePeople(
    32159440916,
    'Newtab Academy',
    0,   
)
newtabaconunt.consultaomnt()
newtabaconunt.adicionarVaoramount(5000)
newtabaconunt.consultaomnt()
newtabaconunt.removeValueOfamount(1)

console.log(newtabaconunt.getAmount())
console.log(newtabaconunt.getNunberOfacount())
console.log(newtabaconunt.getcnpj())