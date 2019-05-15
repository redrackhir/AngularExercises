import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  isUserLogged = false;
  // @Input() isUserLogged: boolean;
  @Output() isUserLoggedChange: EventEmitter<boolean> = new EventEmitter();
  appComponent: typeof AppComponent;

  constructor() {
    this.appComponent = AppComponent;
    this.isUserLoggedChange.emit();
  }

  ngOnInit() {
    console.log('home->OnInit; isUserLogged = ' + this.isUserLogged);
    this.getIsLogged();
    console.log('home->OnInit; isUserLogged = ' + this.isUserLogged);
  }

  getIsLogged() {
    this.username = localStorage.getItem('user');
    if (this.username != null) {
      this.isUserLogged = true;
      return true;
    } else {
      this.isUserLogged = false;
      return false;
    }
  }
}
