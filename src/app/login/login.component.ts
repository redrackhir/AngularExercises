import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../_services/login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private _userService: UserService;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService
  ) {
    this._userService = userService;
  }

  ngOnInit() {

  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(username, password).subscribe(
      /*
      contentData = content.map(
      (data) => data.name
    )
      */
      res => {
        console.log(res);
// tslint:disable-next-line: no-string-literal
        if (res['success'] == true) {
          localStorage.setItem('user', res['user']['name']);
          this._userService.setUserLoggedIn(res['user']);
          console.log('login.component->_userService = ' + JSON.stringify(this._userService));
        }
      },
      error => {
        console.error(error);
      },

      () => this.navigate()
    );
  }

  navigate() {
    this.router.navigate(['/home']);
  }


}
