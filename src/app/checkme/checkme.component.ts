import { interval } from 'rxjs';
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
  // emit value in sequence every 1 second
  source = interval(1000);
  // output: 0,1,2,3,4,5....
  subscribe = this.source.subscribe(val => this.refreshTimer() );
  tiempo: string;

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

  refreshTimer() {
    this.tiempo = Date();
  }

}
