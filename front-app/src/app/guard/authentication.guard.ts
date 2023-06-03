import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from '../components/home/home.component';
import { CustomerService } from '../service/customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private _cust_service: CustomerService, private _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedIn = localStorage.getItem('id') !== null;
    if (isLoggedIn) {
      return true; // User is logged in, allow access to the route
    } else {
      alert('Please enter Id or Password in login Form');
      this._router.navigate(['/home']);
      return false;
      // return false; // User is not logged in, deny access to the route
    }

  }
}
