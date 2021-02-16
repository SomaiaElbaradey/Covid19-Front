import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { promise } from "protractor";
import { UserService } from './user.service'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: UserService,
        private router: Router
    ) { }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        if (!this.authService.isLogged()) {
            this.router.navigate(['/'])
        }
        return this.authService.isLogged();
    }
}