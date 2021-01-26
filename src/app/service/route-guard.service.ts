import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedService } from './hardcoded.service';
import { RouterTestingModule } from '@angular/router/testing';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {


  constructor(private HardcodedService: HardcodedService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.HardcodedService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;

  }
}
