import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {take} from 'rxjs/operators';
import {AuthenticationService} from '../authentication-service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl + 'users';
  constructor(private http: HttpClient) { }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id).pipe(take(1));
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.url + '/' + user.id, user).pipe(take(1));
  }
  createUser(email: string, password: string): Observable<any> {
    return this.http.post(this.url, {email, password}).pipe(take(1));
  }
}
