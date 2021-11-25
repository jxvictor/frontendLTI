import { TransacaoCreateComponent } from './components/views/transacao/transacao-create/transacao-create.component';
import { ContaReadComponent } from './components/views/conta/conta-read/conta-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { PessoaCreateComponent } from './components/views/pessoa/pessoa-create/pessoa-create.component';
import { PessoaDeleteComponent } from './components/views/pessoa/pessoa-delete/pessoa-delete.component';
import { PessoaReadComponent } from './components/views/pessoa/pessoa-read/pessoa-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pessoas',
    component: PessoaReadComponent
  },
  {
    path: 'pessoas/create',
    component: PessoaCreateComponent
  },
  {
    path: 'pessoas/delete/:cpf',
    component: PessoaDeleteComponent
  },
  {
    path: 'transacoes',
    component: TransacaoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
