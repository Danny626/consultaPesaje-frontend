import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from "jwt-decode";
import { TOKEN_NAME } from './../_shared/var.constant';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const helper = new JwtHelperService();

    const rpta = this.loginService.estaLogeado();
    if (!rpta) {
      sessionStorage.clear();
      this.router.navigate(['login']);
      return false;
    } else {
      const token = JSON.parse(sessionStorage.getItem(TOKEN_NAME));
      if (!helper.isTokenExpired(token.access_token)) {
        const decodedToken = jwt_decode(token.access_token);
        return true;
      } else {
        sessionStorage.clear();
        this.router.navigate(['login']);
        return false;
      }
    }
  }
}
