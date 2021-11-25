import { Pessoa } from './../pessoa/pessoa.model';
export interface Conta {
    id: number;
    pessoa: Pessoa;
    saldo: number;
    limiteSaqueDiario: number;
    flagAtivo: boolean;
    tipoConta: number;
    dataCriacao: Date;
}