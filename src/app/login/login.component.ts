import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { 
  LoginService,
  UsuarioService,
  RecintoService
} from '../_service/services';

import { TOKEN_NAME } from '../_shared/var.constant';

import { Usuario } from 'app/_model/usuario';
import { Recinto } from 'app/_model/recinto';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  registroForm: FormGroup;
  error: string = "";
  mensaje: string = "";
  recintos: Recinto[] = []
  recintoSelec: Recinto;

  private subscription: Subscription;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private usuarioService: UsuarioService,
    private recintoService: RecintoService,
  ) {
  }

  ngOnInit() {
    this.listarRecintos();

    this.loginForm = new FormGroup({
      'usuario': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    
    this.registroForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'usuario': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'repassword': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'recinto': new FormControl('', [Validators.required])
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  login() {
    let userName: string = '';
    userName = this.loginForm.value['usuario'];
    let passw: string = '';
    passw = this.loginForm.value['password'];
    this.subscription = this.loginService.login(userName, passw)
      .subscribe(
        (res: Response) => {
          if (res) {
            this.subscription = this.usuarioService.listarUsuarioPorId(userName)
              .subscribe( (respUsuario: Usuario) => {
                const token = JSON.stringify(res);
                sessionStorage.setItem(TOKEN_NAME, token);
                sessionStorage.setItem('recintoCod', respUsuario.recinto.recCod);
                sessionStorage.setItem('recintoNombre', respUsuario.recinto.nombre);
                this.router.navigate(['pages']);
              })
          }
        },
      );
  }

  crearUsuario() {
    if (this.registroForm.value['password'] === this.registroForm.value['repassword']) {
      let usuario: Usuario;
      usuario = new Usuario;
      usuario.state = 'ESP';
      usuario.password = this.registroForm.value['password'];
      usuario.username = this.registroForm.value['usuario'];
      usuario.email = this.registroForm.value['email'];
      usuario.recinto = this.recintoSelec;
      this.subscription = this.usuarioService.registrar(usuario).subscribe(data => {
        this.usuarioService.mensaje.next('Se registró');
        this.mensaje = 'Usuario Creado';
      });
    } else {
      this.usuarioService.mensaje.next('Verifique las contraseñas.');
      this.error = 'Verifique las contraseñas';
    }
  }

  listarRecintos() {
    this.subscription = this.recintoService.listarRecintos()
      .subscribe(recintos => this.recintos = recintos);
  }
}
