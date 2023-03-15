import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login.service";

@Injectable()
export class IsLoginGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.loginService.isLogged()){
      this.router.navigate(['/home'])
      return false
    }
    else{
      return true
    }
  }
}
