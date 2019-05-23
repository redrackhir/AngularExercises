import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserService } from 'src/_services/user.service'
import { User } from 'src/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private userLogged: User;
  private isUserLogged = false;
  private _userService: UserService;
  // @Input() isUserLogged: boolean;
  // @Output() isUserLoggedChange: EventEmitter<boolean> = new EventEmitter();
  appComponent: typeof AppComponent;

  constructor(userService: UserService) {
    this.appComponent = AppComponent;
    //this.isUserLoggedChange.emit();
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
