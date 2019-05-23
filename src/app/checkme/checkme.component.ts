import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/_services/user.service';
import { User } from 'src/_services';

@Component({
  selector: 'app-checkme',
  templateUrl: './checkme.component.html',
  styleUrls: ['./checkme.component.css']
})
export class CheckmeComponent implements OnInit {
// tslint:disable-next-line: variable-name
  _userService: UserService;
  isUserLogged: boolean;
  userLogged: User;

  constructor(userService: UserService) {
    this._userService = userService;
  }

  ngOnInit() {
    this.getIsLogged();
  }

  getIsLogged() {
    this.isUserLogged = this._userService.isUserLoggedIn;
    if (this.isUserLogged) {
      this.userLogged = this._userService.getUserLoggedIn();
    }
  }
}
