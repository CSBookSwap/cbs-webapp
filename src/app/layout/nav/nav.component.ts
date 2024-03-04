import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {StorageService} from "../../services/storage.service";
import {AuthService} from "../../auth/auth.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  isLogin: boolean = false;
  username: string | null = null;

  constructor(
              private storageService: StorageService,
              private authService: AuthService) {

    if (this.authService.isLogin()) {

      this.isLogin = true;


      this.authService.loadUserProfile().then((profile) => {

        this.storageService.saveUser({
          id: profile.id,
          username: profile.username,
          email: profile.email,
          emailVerified: profile.emailVerified,
          firstName: profile.firstName,
          lastName: profile.lastName
        });

        this.username = profile.username?.toString() ?? null;
      });
    }
  }

  auth() {
    this.authService.login().then(r => {
      this.isLogin = true;
      this.authService.loadUserProfile().then((profile) => {
        this.storageService.saveUser({
          id: profile.id,
          username: profile.username,
          email: profile.email,
          emailVerified: profile.emailVerified,
          firstName: profile.firstName,
          lastName: profile.lastName
        });
        this.username = profile.username?.toString() ?? null;
      });
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.isLogin = false;
      this.username = null;
      this.storageService.clear();
    });
  }
}
