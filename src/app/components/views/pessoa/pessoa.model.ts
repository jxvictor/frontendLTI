import { DatePipe } from "@angular/common";

export interface Pessoa {
    nome: string;
    cpf: string;
    dataNascimento: DateConstructor;
}