import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  ADMIN_API: string = "http://localhost:3000";

  constructor(private _http: HttpClient) { }

  getAdmin(): Observable<Admin> {
    return this._http.get<Admin>(this.ADMIN_API + "/admin/1");
  }

  updatePassword(admin: Admin): Observable<Admin> {
    return this._http.put<Admin>(this.ADMIN_API + "/admin/" + admin.id, admin);
  }
}
