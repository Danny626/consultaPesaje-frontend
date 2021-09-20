import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HOST, TOKEN_NAME } from 'app/_shared/var.constant';

import { Pesaje } from 'app/_model/pesaje';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPesajeService {

  url: string = `${HOST}/consultaPesaje`;

  constructor(
    private http: HttpClient
  ) { }

  buscarPesajes(placa: string, fechaInicial: string, fechaFinal: string, recinto: string) {
    const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;

    return this.http.get<Pesaje[]>(`${this.url}/consultaPlaca/${placa}/${fechaInicial}/${fechaFinal}/${recinto}`, {
      headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
