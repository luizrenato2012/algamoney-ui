import { Component, OnInit } from '@angular/core';
import { LancamentosService } from '../lancamentos.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {
  
  title = 'algamoney-ui';
  lancamentos= [];
  
  constructor(private lancamentoService : LancamentosService) {
  }
  
  ngOnInit(): void {
    console.log('on init');
    this.lancamentoService.pesqsuisa()
      .then(retorno => this.lancamentos=retorno);
  }

}
