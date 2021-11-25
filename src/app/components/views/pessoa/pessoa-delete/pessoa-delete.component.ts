import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-delete',
  templateUrl: './pessoa-delete.component.html',
  styleUrls: ['./pessoa-delete.component.css']
})
export class PessoaDeleteComponent implements OnInit {

  pessoa: Pessoa = {
    nome: '',
    cpf: '',
    dataNascimento: Date
  }

  constructor(private service: PessoaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pessoa.cpf = this.route.snapshot.paramMap.get('cpf')!
    this.findByCpf()
  }

  findByCpf(): void {
    this.service.findByCpf(this.pessoa.cpf!).subscribe((resposta) => {
      this.pessoa.nome = resposta.nome
      this.pessoa.cpf = resposta.cpf
      this.pessoa.dataNascimento = resposta.dataNascimento
    })
  }

}


