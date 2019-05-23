import { Injectable } from '@angular/core';
import { User } from '../_models/user.model';

@Injectable()
export class UserService {
  public isUserLoggedIn = false;
  public userLogged: User = { uid: 0, name: '', accessLevel: '-1', ppin: '' };

  constructor() {
    this.getUserLoggedIn();
  }

  setUserLoggedIn(user: User) {
    this.isUserLoggedIn = true;
    this.userLogged = user;
    localStorage.setItem('loggedUser', JSON.stringify(user));
  }

  getUserLoggedIn() {
    this.userLogged = JSON.parse(localStorage.getItem('loggedUser'));
    this.isUserLoggedIn = this.userLogged != null;
    console.log('user.service: isUserLoggedIn = ' + this.isUserLoggedIn);
    if (this.isUserLoggedIn) {
      console.log('user.service: userLogged.name = ' + this.userLogged.name);
    }
    return this.userLogged;
  }

  logout() {
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('currentUser');
    this.getUserLoggedIn();
  }
}
