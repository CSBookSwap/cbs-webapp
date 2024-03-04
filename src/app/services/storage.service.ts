import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private accessToken: string = 'access_token';
  private expiresInKey: string = 'expires_in';
  private refreshExpiresInKey: string = 'refresh_expires_in';
  private refreshToken: string = 'refresh_token';
  private sessionState: string = 'session_state';
  private scope: string = 'scope';

  saveAccessToken(access_token: string) {
    window.localStorage.removeItem(this.accessToken);
    window.localStorage.setItem(this.accessToken, access_token);
  }

  getAccessToken(): string | null {
    return window.localStorage.getItem(this.accessToken);
  }

  saveExpiresIn(expires_in: number) {
    window.localStorage.removeItem(this.expiresInKey);
    window.localStorage.setItem(this.expiresInKey, expires_in.toString());
  }

  getExpiresIn(): string | null {
    return window.localStorage.getItem(this.expiresInKey);
  }

  saveRefreshExpiresIn(refresh_expires_in: number) {
    window.localStorage.removeItem(this.refreshExpiresInKey);
    window.localStorage.setItem(this.refreshExpiresInKey, refresh_expires_in.toString());
  }

  getRefreshExpiresIn(): string | null {
    return window.localStorage.getItem(this.refreshExpiresInKey);
  }

  saveRefreshToken(refresh_token: string) {
    window.localStorage.removeItem(this.refreshToken);
    window.localStorage.setItem(this.refreshToken, refresh_token);
  }

  getRefreshToken(): string | null {
    return window.localStorage.getItem(this.refreshToken);
  }

  saveSessionState(session_state: string) {
    window.localStorage.removeItem(this.sessionState);
    window.localStorage.setItem(this.sessionState, session_state);
  }

  getSessionState(): string | null {
    return window.localStorage.getItem(this.sessionState);
  }

  saveScope(scope: string) {
    window.localStorage.removeItem(this.scope);
    window.localStorage.setItem(this.scope, scope);
  }

  getScope(): string | null {
    return window.localStorage.getItem(this.scope);
  }

  clear() {
    window.localStorage.removeItem(this.accessToken);
    window.localStorage.removeItem(this.expiresInKey);
    window.localStorage.removeItem(this.refreshExpiresInKey);
    window.localStorage.removeItem(this.refreshToken);
    window.localStorage.removeItem(this.sessionState);
    window.localStorage.removeItem(this.scope);
  }
}
