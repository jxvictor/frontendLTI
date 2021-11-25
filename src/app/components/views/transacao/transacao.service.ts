import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transacao } from './transacao.model';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Transacao[]>{
    const url = `${this.baseUrl}/transacao`
    return this.http.get<Transacao[]>(url)
  }

  create(transacao: Transacao): Observable<Transacao>{
    const url = `${this.baseUrl}/transacao`
    return this.http.post<Transacao>(url, transacao);
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
