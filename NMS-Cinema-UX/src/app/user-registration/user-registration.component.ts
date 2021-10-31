import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: User = new User();
  success: boolean = true;

  constructor(private _userSvc: UserService) { }

  ngOnInit(): void {
  }

  register() {
    // console.log(this.user);

    // first see if another user exists with the submitted email address
    let existingUser = null;
    this._userSvc.getUserByEmail(this.user).subscribe(
      result => {
        existingUser = result;
        if (existingUser.length == 0) {
          // if no existing user, add the new one
          this._userSvc.addUser(this.user).subscribe(
            result => {
              sessionStorage.setItem("isUser", "true");
              result.password = "";
              sessionStorage.setItem("user", JSON.stringify(result));
            },
            error => {
              console.log("Error occured during registration." + error);
              alert("An error during registration. Please try again later.");
            });
        }
        else {
          this.success = false;
          this.user = new User();
        }
      },
      error => {
        console.log("an error occured while checking for an existing user account.");
      });
  }

  resetRegistration(form:NgForm){
    form.resetForm();
    this.success=true;
  }
}
