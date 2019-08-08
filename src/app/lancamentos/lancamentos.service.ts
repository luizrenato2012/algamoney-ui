import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  url="http://localhost:8080/lancamentos";
  constructor(private httpClient: HttpClient) { }

  pesqsuisa() : Promise<any>{
    console.log('pesquisa');
    let headers = new HttpHeaders().append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
    return this.httpClient.get(`${this.url}?resumo`, { headers:headers })
      .toPromise()
        .then(retorno => retorno ['content']);
  }

}
