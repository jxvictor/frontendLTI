import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pessoa } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.css']
})
export class PessoaReadComponent implements OnInit {

  pessoas: Pessoa[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'acoes'];

  constructor(private service: PessoaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.pessoas = resposta;
    })
  }

  navegarParaCategoriaCreate() {
    this.router.navigate(["pessoas/create"])
  }

}
