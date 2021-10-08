import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin: Admin = new Admin();

  constructor(private _adminSvc: AdminService) { }

  ngOnInit(): void {
    this.admin.id = parseInt(sessionStorage.getItem("adminId")!);  //to be on the admin page the admin must exist
    this.admin.username = sessionStorage.getItem("adminUsername")!;
  }

  changePassword(): void {

    this._adminSvc.updatePassword(this.admin)
      .subscribe(
        (result) => {
          //console.log("Admin password updated");
          alert("Password Updated!");
        },
        (error) => {
          console.log(error);
          alert("An error occured. Please try again.");
        });

    this.admin.password = "";
    
  }

}
