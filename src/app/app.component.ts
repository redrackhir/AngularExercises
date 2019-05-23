import { Component, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'Clases Angular CLI';
  username: string;
  isUserLogged: boolean;
  currentUrl: string;
  _userService: UserService;
  // isUserLogged = false;

  constructor(router: Router, userService: UserService) {
    this._userService = userService;
    router.events.forEach(event =>
      setTimeout(() => {
        // setTimeout arregla el problema de ExpressionChangedAfterItHasBeenCheckedError
        if (event instanceof NavigationStart) {
          console.log('Detected navigate to: ' + event.url);
          if (event.url === '/home') {
            // console.log('navigation captured!');
            // this.getIsLogged();
            this.isUserLogged = this._userService.isUserLoggedIn;
          }
          this.currentUrl = event.url;
          console.log('currentUrl = ' + this.currentUrl);
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      })
    );
    this.getIsLogged();
    console.log('app.component.ts: ...');
  }

  isUserLoggedChange() {
    this.getIsLogged();
    console.log('AppMain: isUserLoggedChange has changed!');
  }

  getIsLogged() {
    this.username = localStorage.getItem('user');
    if (this.username != null) {
      this.isUserLogged = true;
    } else {
      this.isUserLogged = false;
    }
  }
}

// -- Falta afegir _userService aquí per que detecti
// -- usuari logejat i actualitzi els components a mostrar al navbar
