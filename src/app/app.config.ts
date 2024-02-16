import {APP_INITIALIZER, ApplicationConfig, Provider} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient} from "@angular/common/http";
import {KeycloakBearerInterceptor, KeycloakService} from "keycloak-angular";

//       config: {
//         url: 'http://localhost:8180',
//         realm: 'cs-book-swap',
//         clientId: 'cbs-webapp'
//       },
//       initOptions: {
//         onLoad: 'check-sso'
//       }


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      // Configuration details for Keycloak
      config: {
        url: 'http://localhost:8180', // URL of the Keycloak server
        realm: 'cs-book-swap', // Realm to be used in Keycloak
        clientId: 'cbs-webapp' // Client ID for the application in Keycloak
      },
      // Options for Keycloak initialization
      initOptions: {
        onLoad: 'check-sso', // Check for SSO sessions when the application loads
        //   silentCheckSsoRedirectUri:
        //     window.location.origin + '/assets/silent-check-sso.html' // URI for silent SSO checks
      },
      // Enables Bearer interceptor
      enableBearerInterceptor: true,
      // Prefix for the Bearer token
      bearerPrefix: 'Bearer',
      // URLs excluded from Bearer token addition (empty by default)
      //bearerExcludedUrls: []
    });
}

const KeycloakBearerInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: KeycloakBearerInterceptor,
  multi: true
};

// Provider for Keycloak Initialization
const KeycloakInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializeKeycloak,
  multi: true,
  deps: [KeycloakService]
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    KeycloakInitializerProvider,
    KeycloakBearerInterceptorProvider,
    KeycloakService,
  ]
};
