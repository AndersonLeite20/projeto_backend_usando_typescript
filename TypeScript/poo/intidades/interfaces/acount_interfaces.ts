//export { Ipeople } from './people_interface'
export interface IAcount{
    nomeOfholder: string
    
    opemAcount():boolean
    consultaomnt():string
    adicionarVaoramount(value: number): void
    removeValueOfamount(value: number): boolean
}