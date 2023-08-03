import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/Pessoa';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cpf: string = '';
  cpfValido: boolean = true;
  pessoas: Pessoa[] = [];

  constructor(private backendService: BackendService, private router: Router) {}

  validaCPF() {
    let cpfQuantosNumeros = this.cpf
      ?.toString()
      .replace(/\D/g, '')
      .split('').length;
    if (cpfQuantosNumeros === 11) {
      let Soma;
      let Resto;
      let strCPF = (this.cpf || '').toString().replace(/\D/g, '');
      Soma = 0;
      if (
        strCPF == '00000000000' ||
        strCPF == '11111111111' ||
        strCPF == '22222222222' ||
        strCPF == '33333333333' ||
        strCPF == '44444444444' ||
        strCPF == '55555555555' ||
        strCPF == '66666666666' ||
        strCPF == '77777777777' ||
        strCPF == '88888888888' ||
        strCPF == '99999999999'
      )
        return false;

      for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10))) return false;

      Soma = 0;
      for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    }
    return true;
  }

  buscarPessoa() {
    if (this.validaCPF()) {
      this.backendService.getPessoaPorCPF(this.cpf).subscribe({
        next: (pessoas) => {
          this.pessoas = pessoas;
          if (this.pessoas.length === 0) {
            alert('CPF não encontrado');
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      alert('CPF inválido');
    }
  }

  goToCadastro() {
    const data = { pessoa: this.pessoas[0] };
    this.router.navigate(['cadastro'], { state: data });
  }
}
