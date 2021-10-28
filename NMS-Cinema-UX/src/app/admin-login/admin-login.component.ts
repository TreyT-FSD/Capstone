import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { AuthGaurd } from '../services/auth-gaurd.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin = new Admin();
  loginFailed: boolean = false;

  constructor(private _admSvc: AdminService, private _router: Router, private _authGaurd: AuthGaurd) { }

  ngOnInit(): void {

  }

  /**
   * Verifies the credentials provided match with the stored admin creds.
   * If true, sets up some session values to indicate the user in an admin.
   */
  login() {
    let validAdmin = new Array<Admin>();

    //get existing admin
    this._admSvc.getAdmin().subscribe(
      result => {
        // check for invalid or empty result
        if (result != null) {
          validAdmin = result;

          if (validAdmin[0].username.toLowerCase() == this.admin.username.toLowerCase() &&
            validAdmin[0].password == this.admin.password) {

            sessionStorage.setItem("isAdmin", "true");
            sessionStorage.setItem("adminId", validAdmin[0].id.toString());
            sessionStorage.setItem("adminUsername", validAdmin[0].username);

            this._authGaurd.userLoguout();

            this._router.navigate(["admin"]);
          } else {
            // console.log("admin login failed");
            alert("Login Failed, invalid credentials.")
          }
        }
        else{
          console.log("No admin found");
          alert("No admin found")
        }
      },
      error => {
        console.log("An error occured while retreiving the admin credentials. Err: " + error);
      });
  }

}
