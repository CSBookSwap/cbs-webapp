import {Injectable} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {StorageService} from "../services/storage.service";
import {KeycloakProfile} from "keycloak-js";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService,
              private keycloakService: KeycloakService) {
  }


  async login() {
    await this.keycloakService.login().then(() => {
      this.loadUserProfile();
    });
  }

  loadUserProfile(): Promise<KeycloakProfile> {
  return this.keycloakService.loadUserProfile()
    // .then((profile: KeycloakProfile) => {
    //
    //   this.storageService.saveUser({
    //       id: profile.id,
    //       username: profile.username,
    //       email: profile.email,
    //       emailVerified: profile.emailVerified,
    //       firstName: profile.firstName,
    //       lastName: profile.lastName
    //     });
    // });
    //
    // this.keycloakService.loadUserProfile().then(() => {
    //   const roles: string[] = this.keycloakService.getUserRoles();
    //   this.storageService.saveRoles(this.keycloakService.getUserRoles());
    // });
  }

  async logout() {
    await this.keycloakService.logout(window.location.origin);
    // .then(() => {
    //   this.storageService.clear();
    // });
  }



  public isLogin(): boolean {
    return this.keycloakService.isLoggedIn();
  }
}
