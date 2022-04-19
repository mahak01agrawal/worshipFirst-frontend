import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PriestService } from './priest.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private api:PriestService,private router:Router){}
  canActivate()
  {
    if(this.api.checkToken())
      return true;
    else  
    {
      this.router.navigate(["home"]);
      return false;
    }
  }
}