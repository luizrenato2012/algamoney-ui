import { Component, OnInit } from '@angular/core';
import { LancamentosService, FiltroPesquisa } from '../lancamentos.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {
  
  title = 'algamoney-ui';
  lancamentos= [];
  descricao="";
  dataVencimentoDe: Date;
  dataVencimentoAte: Date;
  
  constructor(private lancamentoService : LancamentosService) {
  }
  
  ngOnInit(): void {
  }

  pesquisar(): void {
    const filtro  = { 
    "descricao" : this.descricao,
    "dataVencimentoDe" : this.dataVencimentoDe,
    "dataVencimentoAte" : this.dataVencimentoAte
    };
    
    this.lancamentoService.pesquisa(filtro)
      .then(retorno => this.lancamentos=retorno,
            erro => console.log(`Erro ao pesquisar:\n ${JSON.stringify(erro)}`) );
  }

}
