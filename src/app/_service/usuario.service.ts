import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from '../_model/usuario';
import { HOST, TOKEN_NAME } from '../_shared/var.constant';


@Injectable({
    providedIn: 'root',
})
export class UsuarioService {

    usuarioCambio = new Subject<Usuario[]>();
    mensaje = new Subject<string>();
    private url: string = `${HOST}/usuarios`;

    constructor(private http: HttpClient) { }

    listarUsuarios() {
        const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
        return this.http.get<Usuario[]>(this.url, {
            headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`)
                .set('Content-Type', 'application/json'),
        });
    }

    listarUsuariosPageable(p: number, s: number) {
        const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
        return this.http.get<Usuario[]>(`${this.url}/pageable?page=${p}&size=${s}`, {
            headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`)
                .set('Content-Type', 'application/json'),
        });
    }

    listarUsuarioPorId(id: string) {
        /* const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token; */
        return this.http.get<Usuario>(`${this.url}/${id}`);
    }

    // listarUsuarioPorUsuario(username: string) {
    //     console.log(username);
    //     const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
    //     return this.http.get<Usuario>(`${this.url}/user/${username}`, {
    //         headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`)
    //             .set('Content-Type', 'application/json'),
    //     });
    // }

    // registrar(usuario: Usuario) {
    //     const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
    //     return this.http.post(this.url, usuario, {
    //         headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`)
    //             .set('Content-Type', 'application/json'),
    //     });
    // }

    registrar(usuario: Usuario) {
        return this.http.post(this.url, usuario);
    }

    modificar(usuario: Usuario) {
        const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
        return this.http.put(this.url, usuario, {
            headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`)
                .set('Content-Type', 'application/json'),
        });
    }

    eliminar(id: number) {
        const access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
        return this.http.delete(`${this.url}/${id}`, {
            headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`)
                .set('Content-Type', 'application/json'),
        });
    }
}
