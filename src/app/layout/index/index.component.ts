import {Component} from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  userData: string = 'no data available';

  // constructor(private authGuardService: AuthGuard) {
  //   // this.userData = JSON.stringify(this.authGuardService.getUser());
  // }
  //
  // login() {
  //   this.authGuardService.login();
  // }
  //
  // logout() {
  //   this.authGuardService.logout();
  // }
  //
  // getUser() {
  //   this.userData = JSON.stringify(this.authGuardService.getUser());
  // }
}
