import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Checkin } from 'src/_models/checkin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  PHP_API_SERVER = 'http://127.0.0.1';

  constructor(private http: HttpClient) {}

/*   readCheckins(): Observable<Checkin[]> {
    return this.http.get<Checkin[]>(`${this.PHP_API_SERVER}/api/read.php`);
  } */

  insertCheckin(uid: number, datetimecheck: Date): Observable<any> {
    let checkin: Checkin = {uid, datetimecheck};
    return this.http.post<Checkin>(`${this.PHP_API_SERVER}/api/insertCheckin.php`, checkin, {
      observe: 'response'
    });
  }

/*   updateCheckin(checkin: Checkin) {
    return this.http.put<Checkin>(`${this.PHP_API_SERVER}/api/update.php`, checkin);
  } */

  logout() {
    // remove checkin from local storage to log checkin out
    localStorage.removeItem('currentCheckin');
  }
}
