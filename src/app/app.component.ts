import { Component, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clases Angular CLI';
  username: string;
  isUserLogged: boolean;
  currentUrl: string;
  // isUserLogged = false;

  constructor(router: Router) {
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        console.log('Detected navigate to: ' + event.url);
        if (event.url === '/home') {
          console.log('navigation captured!');
          this.getIsLogged();
        }
        this.currentUrl = event.url;
        console.log('currentUrl = ' + this.currentUrl);
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
    this.getIsLogged();
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
