import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private tokenKey: string = environment.storageTokenKey;

  constructor() {
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(this.tokenKey);
    window.localStorage.setItem(this.tokenKey, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(this.tokenKey);
  }


}
