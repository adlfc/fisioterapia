import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers()
  {
    return this.http.get<User[]>('http://localhost:3000/usuario');
  }

  public addUser(user)
  {
    return this.http.post<User>('http://localhost:3000/usuario', user.id);
  }

}
