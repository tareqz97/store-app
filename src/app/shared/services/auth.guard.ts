import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
class PermissionsService {

    constructor(private authService: AuthService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (this.authService.isLoggedIn()) {
            const requiredRole = next.data['role'];
            const userRole = this.authService.getUserRole();
            if (requiredRole && requiredRole !== userRole) {
                alert("Unauthorized");
                if (userRole == 'user')
                    this.router.navigate(['/categories-product']);
                else {
                    this.router.navigate(['/products']);
                }
                return false;
            }
            return true;
        } else {
            this.router.navigate(['auth/login']);
            return false;
        }
    }
}

export const AccessGuard: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    return inject(PermissionsService).canActivate(next, state);
};