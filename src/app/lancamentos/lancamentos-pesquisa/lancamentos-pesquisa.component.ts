import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  title = 'algamoney-ui';
  lancamentos= [];

  constructor() {
    this.lancamentos.push({ 'pessoa': 'Maria Rita' ,  'descricao': 'Bahamas' ,  'vencimento': new Date(2017,2,10) ,
    'pagamento': new Date(2017, 2, 10) ,  'valor': 100.32 , 'tipo': 'DESPESA'});
    this.lancamentos.push({ 'pessoa': 'Pedro Santos' ,  'descricao': 'Top Club' ,  'vencimento': new Date(2017,6,10) ,
    'pagamento': new Date(2018, 5, 18) ,  'valor': 120.00,  'tipo': 'RECEITA' });
    this.lancamentos.push({ 'pessoa': 'Ricardo Pereira' ,  'descricao': 'CEMIG' ,  'vencimento': new Date(2017,2,10) ,
      'pagamento': new Date(2017,2 , 10) ,  'valor': 110.44, 'tipo': 'DESPESA' });
    this.lancamentos.push({ 'pessoa': 'Josué Mariano' ,  'descricao': 'DMAE' ,  'vencimento': new Date(2017, 6, 10) ,
      'pagamento': new Date(2018, 4, 12) ,  'valor': 200.30 , 'tipo': 'DESPESA'});
    this.lancamentos.push({ 'pessoa': 'Pedro Barbosa' ,  'descricao': 'Extra' ,  'vencimento': new Date(2017, 3, 10) ,
      'pagamento': new Date(2017, 3, 10) ,  'valor': 1010.32, 'tipo': 'RECEITA' });
    this.lancamentos.push({ 'pessoa': 'Henrique Medeiros' ,  'descricao': 'Bahamas' ,  'vencimento': new Date(2017, 6, 10) ,
      'pagamento': new Date(2017, 3, 11) ,  'valor': 500.00, 'tipo': 'RECEITA' });
    this.lancamentos.push({ 'pessoa': 'Carlos Santana' ,  'descricao': 'Top Club' ,  'vencimento': new Date(2017, 3, 10) ,
      'pagamento': new Date(2017, 3, 10) ,  'valor': 400.32, 'tipo': 'RECEITA' });
    this.lancamentos.push({ 'pessoa': 'Leonardo Oliveira' ,  'descricao': 'Despachante' ,  'vencimento': new Date(2017, 6, 10) ,
      'pagamento': new Date(2017, 4, 21) ,  'valor': 123.64 , 'tipo': 'DESPESA'});
    this.lancamentos.push({ 'pessoa': 'Isabela Martins' ,  'descricao': 'Pneus' ,  'vencimento' : new Date(2017, 4, 10) ,
     'pagamento': new Date(2017, 4, 10) ,  'valor': 665.33, 'tipo': 'DESPESA' });
    this.lancamentos.push({ 'pessoa': 'Josué Mariano' ,  'descricao': 'Café' ,  'vencimento' : new Date(2017, 6, 10) ,
     'pagamento': '' ,  'valor': 8.32 , 'tipo': 'RECEITA'});
    this.lancamentos.push({ 'pessoa': 'Ricardo Pereira' ,  'descricao': 'Eletrônicos' ,  'vencimento' : new Date(2017, 4, 10),
     'pagamento': new Date(2017, 4, 10) ,  'valor': 2100.32 , 'tipo': 'DESPESA'});
    this.lancamentos.push({ 'pessoa': 'Pedro Santos' ,  'descricao': 'Instrumentos' ,  'vencimento' : new Date(2017, 6, 10) ,
      'pagamento': '' ,  'valor': 1040.32, 'tipo': 'RECEITA' });
    this.lancamentos.push({ 'pessoa': 'Maria Rita' ,  'descricao': 'Café' ,  'vencimento' : new Date(2017, 4, 10) ,
     'pagamento': new Date(2017, 4, 10) ,  'valor': 4.32, 'tipo': 'DESPESA' });
    this.lancamentos.push({ 'pessoa': 'João Silva' ,  'descricao': 'Lanche' ,  'vencimento' : new Date(2017, 6, 10) ,
    'pagamento': new Date(2017, 6, 24) ,  'valor': 10.20 , 'tipo': 'DESPESA'});
    this.lancamentos.push({ 'pessoa': 'Maria Rita' ,  'descricao': 'Prêmio Semestral' ,  'vencimento' : new Date(2017, 7, 10) ,
     'pagamento': new Date(2017, 5, 9),  'valor': 10000.00, 'tipo': 'RECEITA' });
    this.lancamentos.push({ 'pessoa': 'Maria Rita' ,  'descricao': 'Bahamas Viagem alterada' ,  'vencimento' : new Date(2017, 2, 10) ,
    'pagamento': new Date(2017, 2, 14) ,  'valor': 100.32 , 'tipo': 'RECEITA'});
  }

}
