import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/Pessoa';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getPessoaPorCPF(cpf: string): Observable<Pessoa[]> {
    cpf = cpf.replace(/\D/g, '');
    return this.http.get<Pessoa[]>(`http://localhost:3000/pessoas?cpf=${cpf}`);
  }

}
