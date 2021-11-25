import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  pessoa: Pessoa = {
    nome: '',
    cpf: '',
    dataNascimento: Date
  }

  constructor(private service: PessoaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.pessoa).subscribe((resposta) => {
      this.router.navigate(['pessoas'])
      this.service.mensagem('Pessoa criada com sucesso!');
    }, erro => {
      for(let i = 0; i < erro.error.errors.length; i++){
        this.service.mensagem(erro.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate([])
  }

}
