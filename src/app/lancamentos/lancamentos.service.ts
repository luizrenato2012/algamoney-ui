import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as moment from 'moment';

//import moment = require('moment');

export interface FiltroPesquisa {
  descricao : string;
  dataVencimentoDe: Date;
  dataVencimentoAte: Date;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  url="http://localhost:8080/lancamentos";
  constructor(private httpClient: HttpClient) { }
  
  pesquisa(filtro : FiltroPesquisa) : Promise<any>{
    moment(filtro.dataVencimentoDe).format();
    let headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
    let params = new HttpParams();

    if (filtro.descricao) {
      params = params.append("descricao", filtro.descricao);
    }

    if (filtro.dataVencimentoDe) {
      params = params.append("dataVencimentoDe", 
        moment(filtro.dataVencimentoDe).format("YYYY-MM-DD"));
    }

    if (filtro.dataVencimentoAte) {
      params = params.append("dataVencimentoAte", 
        moment(filtro.dataVencimentoAte).format("YYYY-MM-DD"));
    }
    return this.httpClient.get(`${this.url}?resumo`, { headers, params })
      .toPromise()
        .then(retorno => retorno ['content']);
  }

}
