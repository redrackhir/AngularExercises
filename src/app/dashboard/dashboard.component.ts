import { Component, OnInit } from '@angular/core';
import { User } from 'src/_models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[];
  selectedUser: User = { uid: null, name: null, ppin: null, accessLevel: null };
  title = 'Listado usuarios';

  constructor() {}

  ngOnInit() {}
}
