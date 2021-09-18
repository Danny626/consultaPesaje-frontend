import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HOST, TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, TOKEN_NAME } from '../_shared/var.constant';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements OnDestroy {

  url: string = `${HOST}/oauth/token`;
  private subscription: Subscription;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  login(usuario: string, contrasena: string) {
    const body =
      `grant_type=password&username=${encodeURIComponent(usuario)}&password=${encodeURIComponent(contrasena)}`;

    return this.http.post(this.url, body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        .set('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD)),
    });
  }

  estaLogeado() {
    const token = sessionStorage.getItem(TOKEN_NAME);
    return token != null;
  }

  cerrarSesion() {
    const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
    this.subscription = this.http.get(`${HOST}/users/anular/${access_token}`).subscribe(data => {
      sessionStorage.clear();
      this.router.navigate(['login']);
    });
  }


  // enviarCorreo(correo: string) {
  //   return this.http.post<number>(`${HOST}/login/enviarCorreo`, correo, {
  //     headers: new HttpHeaders().set('Content-Type', 'text/plain')
  //   });
  // }

  // verificarTokenReset(token: string) {
  //   return this.http.get<number>(`${HOST}/login/restablecer/verificar/${token}`);
  // }

  // restablecer(token: string, clave: string) {
  //   return this.http.post<number>(`${HOST}/login/restablecer/${token}`, clave, {
  //     headers: new HttpHeaders().set('Content-Type', 'text/plain')
  //   });
  // }
}
