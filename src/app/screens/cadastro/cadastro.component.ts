import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/models/Pessoa';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  pessoa: Pessoa = {} as Pessoa;

  constructor(private route: ActivatedRoute) { }

ngOnInit() {
  ;
  console.log(this.route.snapshot);
}
}
