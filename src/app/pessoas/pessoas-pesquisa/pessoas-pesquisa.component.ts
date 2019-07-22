import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {

  pessoas = [];

  constructor() {
    this.pessoas  = [
      { "nome": "João Silva",    "cidade": "Uberlândia",    "estado": "MG",    "status": true},
      { "nome": "Maria Rita",    "cidade": "Ribeirão Preto",    "estado": "SP",    "status": true},
      { "nome": "Pedro Santos",    "cidade": "Goiânia",    "estado": "GO",    "status": false},
      { "nome": "Ricardo Pereira",    "cidade": "Salvador",    "estado": "BA",    "status": true},
      { "nome": "Josué Mariano",    "cidade": "Natal",    "estado": "RN",    "status": false},
      { "nome": "Pedro Barbosa",    "cidade": "Porto Alegre",    "estado": "RS",    "status": false},
      { "nome": "Henrique Medeiros",    "cidade": "Rio de Janeiro",    "estado": "RJ",    "status": true},
      { "nome": "Carlos Santana",    "cidade": "Belo Horizonte",    "estado": "MG",    "status": true},
      { "nome": "Isabela Martins",    "cidade": "Manaus",    "estado": "AM",    "status": true},
      { "nome": "Leonardo Oliveira",    "cidade": "Uberlândia",    "estado": "MG", "status": false}
    ];
   }



}
