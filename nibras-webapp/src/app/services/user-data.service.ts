import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../dashboard/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  // Get All Users
  GetUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.baseUrl + 'users');
  }
}
