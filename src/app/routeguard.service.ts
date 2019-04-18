import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if(localStorage.getItem('isUserLoggedIn')) {
      return true;
    } 
    else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
