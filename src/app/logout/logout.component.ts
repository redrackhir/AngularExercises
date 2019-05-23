import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  _userService: UserService;

  constructor(private router: Router, userService: UserService) {
    this._userService = userService;
  }

  ngOnInit() {
    this.logout();
  }

  logout() {
    this._userService.logout();
    // localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }
}
