import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //USER_API: string = "http://localhost:3000";
  USER_API: string = "http://localhost:8085"; //SpringBoot Rest API

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this._http.get<User[]>(this.USER_API + "/user");
  }

  getUserById(id:number): Observable<User>{
    return this._http.get<User>(this.USER_API + "/user/" + id);
  }

  getUserByEmail(user:User): Observable<User[]>{
    return this._http.get<User[]>(this.USER_API + "/user?email=" + user.email);
  }

  addUser(user:User): Observable<User>{
    return this._http.post<User>(this.USER_API + "/user", user);
  }

  deleteUserById(id: number): Observable<User>{
    return this._http.delete<User>(this.USER_API + "/user/" + id);
  }

  updateUserById(id:number, user:User): Observable<User>{
    return this._http.put<User>(this.USER_API + "/user/" + id, user);
  }
}
