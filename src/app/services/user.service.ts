import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | undefined
  baseUrl: string = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  getGitUser(username: string) {
    return this.httpClient.get(this.baseUrl + 'users/' + username).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  setUser(user: User | undefined) {
    localStorage.setItem('user', JSON.stringify(user))
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
