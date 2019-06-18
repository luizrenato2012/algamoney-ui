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
    this.lancamentos.push({ 'pessoa': 'Maria Rita' ,  'descricao': 'Bahamas' ,  'vencimento': '2017-02-10' ,
    'pagamento': '2017-02-10' ,  'valor': 100.32 , 'tipo': 'DESPESA'});
    this.lancamentos.push({ 'pessoa': 'Pedro Santos' ,  'descricao': 'Top Club' ,  'vencimento': '2017-06-10' ,
    'pagamento': '' ,  'valor': 120.00,  'tipo': 'RECEITA' });
    this.lancamentos.push({ 'pessoa': 'Ricardo Pereira' ,  'descricao': 'CEMIG' ,  'vencimento': '2017-02-10' ,
      'pagamento': '2017-02-10' ,  'valor': 110.44, 'tipo': 'DESPESA' });
    this.lancamentos.push({ 'pessoa': 'Josué Mariano' ,  'descricao': 'DMAE' ,  'vencimento': '2017-06-10' ,
      'pagamento': '' ,  'valor': 200.30 , 'tipo': 'DESPESA'});
    this.lancamentos.push({ 'pessoa': 'Pedro Barbosa' ,  'descricao': 'Extra' ,  'vencimento': '2017-03-10' ,
      'pagamento': '2017-03-10' ,  'valor': 1010.32, 'tipo': 'RECEITA' });
    this.lancamentos.push({ 'pessoa': 'Henrique Medeiros' ,  'descricao': 'Bahamas' ,  'vencimento': '2017-06-10' ,
      'pagamento': '' ,  'valor': 500.00, 'tipo': 'RECEITA' });
    this.lancamentos.push({ 'pessoa': 'Carlos Santana' ,  'descricao': 'Top Club' ,  'vencimento': '2017-03-10' ,
      'pagamento': '2017-03-10' ,  'valor': 400.32, 'tipo': 'RECEITA' });
    this.lancamentos.push({ 'pessoa': 'Leonardo Oliveira' ,  'descricao': 'Despachante' ,  'vencimento': '2017-06-10' ,
      'pagamento': '' ,  'valor': 123.64 , 'tipo': 'DESPESA'});
    this.lancamentos.push({ 'pessoa': 'Isabela Martins' ,  'descricao': 'Pneus' ,  'vencimento': '2017-04-10' ,
     'pagamento': '2017-04-10' ,  'valor': 665.33, 'tipo': 'DESPESA' });
    this.lancamentos.push({ 'pessoa': 'Josué Mariano' ,  'descricao': 'Café' ,  'vencimento': '2017-06-10' ,
     'pagamento': '' ,  'valor': 8.32 , 'tipo': 'RECEITA'});
    this.lancamentos.push({ 'pessoa': 'Ricardo Pereira' ,  'descricao': 'Eletrônicos' ,  'vencimento': '2017-04-10' ,
     'pagamento': '2017-04-10' ,  'valor': 2100.32 , 'tipo': 'DESPESA'});
    this.lancamentos.push({ 'pessoa': 'Pedro Santos' ,  'descricao': 'Instrumentos' ,  'vencimento': '2017-06-10' ,
      'pagamento': '' ,  'valor': 1040.32, 'tipo': 'RECEITA' });
    this.lancamentos.push({ 'pessoa': 'Maria Rita' ,  'descricao': 'Café' ,  'vencimento': '2017-04-10' ,
     'pagamento': '2017-04-10' ,  'valor': 4.32, 'tipo': 'DESPESA' });
    this.lancamentos.push({ 'pessoa': 'João Silva' ,  'descricao': 'Lanche' ,  'vencimento': '2017-06-10' ,
    'pagamento': '' ,  'valor': 10.20 , 'tipo': 'DESPESA'});
    this.lancamentos.push({ 'pessoa': 'Maria Rita' ,  'descricao': 'Prêmio Semestral' ,  'vencimento': '2017-07-10' ,
     'pagamento': '' ,  'valor': 10000.00, 'tipo': 'RECEITA' });
    this.lancamentos.push({ 'pessoa': 'Maria Rita' ,  'descricao': 'Bahamas Viagem alterada' ,  'vencimento': '2017-02-10' ,
    'pagamento': '2017-02-10' ,  'valor': 100.32 , 'tipo': 'RECEITA'});
  }

}
