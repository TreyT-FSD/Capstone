import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { AuthGaurd } from '../services/auth-gaurd.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  existingUser: User = new User();
  redirectUrl: string = "";

  constructor(
    private _userSvc: UserService,
    private _router: Router,
    private _authGaurd: AuthGaurd,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.redirectUrl = this._route.snapshot.queryParams['redirect'] || '/';
    console.log(this.redirectUrl);

  }

  login() {
    this._userSvc.getUserByEmail(this.user).subscribe(
      result => {
        if (this.user.email === result[0].email) {
          sessionStorage.setItem("isUser", "true");

          result[0].password = "";
          sessionStorage.setItem("user", JSON.stringify(result[0]));

          //if they were previosuly logged in as an user log them out
          // TODO: refactor how we handle user/admin logging in/out
          this._authGaurd.adminLogout();

          //redirect as needed
          this._router.navigateByUrl(this.redirectUrl);

          // this._router.navigate(['user']);
        }
        else {
          alert("Invalid Credentials");
        }

      },
      error => {
        console.log("An error occured while retreiving the user details.");
      }
    );
  }

  isCheckoutRedirect(): boolean {
    if(this.redirectUrl == "/cart/checkout"){
      return true;
    }
    return false;
  }

}
