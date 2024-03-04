import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private userToken = 'user';
  private rolesToken = 'roles';

  saveUser(user: User) {
    window.localStorage.removeItem(this.userToken);
    window.localStorage.setItem(this.userToken, JSON.stringify(user));
  }

  getUsername(): string {
    const userData = window.localStorage.getItem(this.userToken);
    if (userData !== null) {
      const user: User = JSON.parse(userData);
      return user.username?.toString() || '';
    } else {
      return '';
    }
  }

  getUser(): User {
    const userData = window.localStorage.getItem(this.userToken);
    if (userData !== null) {
      return JSON.parse(userData);
    } else {
      return {} as User;
    }
  }

  getId(): string {
    const userData = window.localStorage.getItem(this.userToken);
    if (userData !== null) {
      const user: User = JSON.parse(userData);
      return user.id?.toString() || '';
    } else {
      return '';
    }
  }


  clear() {
    window.localStorage.clear();
  }

  saveRoles(userRoles: string[]) {
    window.localStorage.removeItem(this.rolesToken);
    window.localStorage.setItem(this.rolesToken, JSON.stringify(userRoles));
  }

  getRoles(): string[] {
    const rolesData = window.localStorage.getItem(this.rolesToken);
    if (rolesData !== null) {
      return JSON.parse(rolesData);
    } else {
      return [];
    }
  }
}
