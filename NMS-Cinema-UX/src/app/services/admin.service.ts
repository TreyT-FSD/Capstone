import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //ADMIN_API: string = "http://localhost:3000"; //json-server
  // ADMIN_API: string = "http://localhost:8085"; //SpringBoot Rest API
  ADMIN_API: string = "http://3.15.44.207:8085"; //SpringBoot Rest API

  

  constructor(private _http: HttpClient) { }

  getAdmin(): Observable<Admin[]> {
    return this._http.get<Admin[]>(this.ADMIN_API + "/admin?username=admin");
  }

  updatePassword(admin: Admin): Observable<Admin> {
    return this._http.put<Admin>(this.ADMIN_API + "/admin/" + admin.id, admin);
  }
}
