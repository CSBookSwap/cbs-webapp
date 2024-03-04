import {Routes} from '@angular/router';
import {IndexComponent} from "./layout/index/index.component";
import {BooksComponent} from "./components/books/books.component";
import {AuthorsComponent} from "./components/authors/authors.component";
import {UserComponent} from "./components/user/user.component";
import {keycloakAuthGuard} from "./auth/keycloak-auth.guard";

export const routes: Routes = [
  {path: '', component: IndexComponent, pathMatch: 'full'},
  {path: 'books', component: BooksComponent, pathMatch: 'full'},
  {path: 'authors', component: AuthorsComponent, pathMatch: 'full'},
  {path: 'user', component: UserComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];
