import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthCookie} from "./auth_cookie";
import {NgModule} from "@angular/core";

@NgModule()
export class ActivateGuard implements CanActivate{
  constructor(private cookies : AuthCookie) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
      return this.cookies.isAdmin;
  }
}
