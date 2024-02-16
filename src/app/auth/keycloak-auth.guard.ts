import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {KeycloakAuthGuard, KeycloakService} from "keycloak-angular";
import {inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(protected override readonly router: Router,
              protected readonly keycloakService: KeycloakService) {
    super(router, keycloakService);
  }

  async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    if (!this.keycloakService.isLoggedIn()) {
      await this.keycloakService.login();
    }

    const requiredRoles: string[] = route.data['roles'];

    if (!requiredRoles || !requiredRoles.length) {
      return true;
    } else {

      const userRoles: string[] = this.keycloakService.getUserRoles();

      if (requiredRoles.some(role => userRoles.includes(role))) {
        return true;
      }
    }

    // const userRoles: string[] = this.keycloakService.getUserRoles();
    //
    // if (requiredRoles.some(role => userRoles.includes(role))) {
    //   return true;
    // }

    return this.router.navigate(['']);
  }
}

export const keycloakAuthGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuard).isAccessAllowed(route, state);
};
