import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  constructor() { }

  tipos = [
    { label: 'Receita' , value: 'RECEITA'},
    { label: 'Despesa' , value: 'DESPESA'}
  ];

  categorias = [
    { label: 'Alimentação', value: 1},
    { label: 'Transporte', value: 2}
  ];

  pessoas = [
    { label: 'João da Silva' , value: 4 },
    { label: 'Sebastião Souza', value: 9 },
    { label: 'Maria abadia' , value: 3 },
  ];


  ngOnInit() {
  }

}