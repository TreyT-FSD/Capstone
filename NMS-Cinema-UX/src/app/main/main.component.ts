import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthGaurd } from '../services/auth-gaurd.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _authGaurd:AuthGaurd, private _router:Router) { }

  ngOnInit(): void {
  }

  isAdmin(): boolean{
    return this._authGaurd.isAdmin();
  }

  adminLogout(){
    this._authGaurd.adminLogout();
  }

  isUser(): boolean{
    return this._authGaurd.isUser();
  }

  userLogout(){
    this._authGaurd.userLoguout();
    this._router.navigate(['/browse']);
  }

  getUserEmail(): string {
    let userObjAsString = sessionStorage.getItem("user");

    if(userObjAsString != null){
      let userFromSession = JSON.parse(userObjAsString) as User;
      return userFromSession.email;
    }
    return "";
  }

}
