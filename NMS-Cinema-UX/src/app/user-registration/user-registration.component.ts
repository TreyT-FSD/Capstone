import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: User = new User();

  constructor(private _userSvc: UserService) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.user);
    // TODO: Implement register function

    this._userSvc.addUser(this.user).subscribe(
      result=>{
        sessionStorage.setItem("isUser", "true");
        result.password = "";
        sessionStorage.setItem("user", JSON.stringify(result));
      },
      error=>{
        console.log("Error occured during registration." + error);
        alert("An error occured. Please try again later.");
      });
  }

}
