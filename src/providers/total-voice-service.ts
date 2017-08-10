import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the TotalVoiceServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TotalVoiceServiceProvider {

  url: string = 'https://api.totalvoice.com.br/composto';

  constructor(public http: Http) {
  }

  send(token: string, from: string, to: string): Observable<any> {

    let headers = new Headers({ 'Accept': 'application/json', 'Access-Token': token });
    let options = new RequestOptions({ headers: headers });

    let body = {
      numero_destino: to,
      dados: [
        {
          acao: 'audio',
          acao_dados: {
            url_audio: 'https://github.com/haskellcamargo/gemidao-do-zap/raw/master/resources/gemidao.mp3'
          }
        }
      ],
      bina: from
    };

    return this.http.post(this.url, body, options)
      .map(res => res.json());

  }

  // getHistory(token: string): Observable<any> {
  //
  //   let headers = new Headers({ 'Accept': 'application/json', 'Access-Token': token });
  //   let options = new RequestOptions({ headers: headers });
  //
  //   let body = {
  //     numero_destino: to,
  //     dados: [
  //       {
  //         acao: 'audio',
  //         acao_dados: {
  //           url_audio: 'https://github.com/haskellcamargo/gemidao-do-zap/raw/master/resources/gemidao.mp3'
  //         }
  //       }
  //     ],
  //     bina: from
  //   };
  //
  //   return this.http.post(this.url, body, options)
  //     .map(res => res.json());
  // }

}
