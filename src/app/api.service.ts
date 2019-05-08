import { Injectable } from '@angular/core';

import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://127.0.0.1';

  constructor(private httpClient: HttpClient) {}

  readUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }
}
