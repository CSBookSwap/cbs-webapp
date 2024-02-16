import {Injectable} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) {
  }

  async login() {
    await this.keycloakService.login();
  }

  async logout() {
    await this.keycloakService.logout();
  }

  async isLoggedIn(): Promise<boolean> {
    return this.keycloakService.isLoggedIn();
  }

  async getUserRoles() {
    return this.keycloakService.getUserRoles();
  }

  async getUsername() {
    return this.keycloakService.getUsername();
  }

  async getUserProfile() {
    return this.keycloakService.loadUserProfile();
  }

  async getToken() {
    return this.keycloakService.getToken();
  }

  async register() {
    await this.keycloakService.register();
  }
}
