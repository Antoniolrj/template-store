import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.loginService.isLogged()){
      return true
    }
    else {
      this.router.navigate(['/login'])
      return false
    }

  }
}
