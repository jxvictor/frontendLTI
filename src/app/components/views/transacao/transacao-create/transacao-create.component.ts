import { Transacao } from './../transacao.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransacaoService } from '../transacao.service';

@Component({
  selector: 'app-transacao-create',
  templateUrl: './transacao-create.component.html',
  styleUrls: ['./transacao-create.component.css']
})
export class TransacaoCreateComponent implements OnInit {

  transacao: Transacao = {
  }

  constructor(private service: TransacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.transacao).subscribe(transacao => {

      this.router.navigate(['transacoes'])
      this.service.mensagem('Transacao criada com sucesso!');
    }
    )
  }

  cancel(): void {
    this.router.navigate([])
  }

}
