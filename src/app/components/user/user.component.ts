import {Component} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {StorageService} from "../../services/storage.service";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user: User;
  roles: string[] = [];

  constructor(private storageService: StorageService,
              private userService: UserService) {

    this.user = this.storageService.getUser();
    this.roles = this.storageService.getRoles();
  }




}
