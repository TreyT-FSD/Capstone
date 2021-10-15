import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthGaurd } from '../services/auth-gaurd.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = new User();;

  constructor(private _authGuard: AuthGaurd, private _router:Router) {}

  ngOnInit(): void {
    let userFromSession = JSON.parse(sessionStorage.getItem("user")!) as User;
    Object.assign(this.user, userFromSession);
  }

  logout(){
    this._authGuard.userLoguout();
    this._router.navigate(['/browse']);
  }

}
