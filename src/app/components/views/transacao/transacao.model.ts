import { Conta } from "../conta/conta.model";

export interface Transacao {
    id?: number;
    conta?: Conta;
    valor?: number;
    dataTransacao?: Date;
}

