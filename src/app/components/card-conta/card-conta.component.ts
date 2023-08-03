import { Component, Input } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';

@Component({
  selector: 'app-card-conta',
  templateUrl: './card-conta.component.html',
  styleUrls: ['./card-conta.component.scss'],
})
export class CardContaComponent {
  @Input() pessoa: Pessoa = {
    "cpf": "32781506869",
    "nome": "Fabio Moreno",
    "situacao": "Regular"
  };
  constructor() {}
}
