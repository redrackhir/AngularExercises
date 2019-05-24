import { interval } from 'rxjs';
import { CheckinService } from 'src/_services/checkin.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/_services/user.service';
import { User } from 'src/_services';
import { toDate } from '@angular/common/src/i18n/format_date';

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
  tiempo: Date;
  router: any;

  constructor(userService: UserService, private checkinService: CheckinService) {
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
    this.tiempo = new Date();
  }

  onSubmit() {
    // event.preventDefault();
    // Paramos el timerinterval
    this.subscribe.unsubscribe();
    console.log(this.tiempo);

  }

  insertCheckin(event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.checkinService.insertCheckin(this.userLogged.uid, this.tiempo).subscribe(
      res => {
        console.log('res => ' + JSON.stringify(res['status']));
        // tslint:disable-next-line: no-string-literal
        if (res['status'] == 204) {
          console.log('/Checkin -> User checked successful!!');
        }
      },
      error => {
        // console.error(error);
        if (!error.ok) {
          if (error.status == 0) {
            // sin respuesta del servidor
            this.router.navigate(['/401']);
          }
          console.error('Oooops, ' + error.message);
          console.error(JSON.stringify(error));
        }
      },

      () => this.navigate()
    );

  }
  navigate() {
    throw new Error("Method not implemented.");
  }
}

