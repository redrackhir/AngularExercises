import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[];
  selectedUser: User = { uid: null, name: null, ppin: null };
  title = 'Listado usuarios';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.readUsers().subscribe((users: User[]) => {
      this.users = users;
      console.log(this.users);
    });
  }
}
