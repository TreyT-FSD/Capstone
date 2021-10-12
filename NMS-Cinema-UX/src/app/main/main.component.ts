import { Component, OnInit } from '@angular/core';
import { AuthGaurd } from '../services/auth-gaurd.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _authGaurd:AuthGaurd) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean{
    return this._authGaurd.isAdmin();
  }

  logout(){
    this._authGaurd.adminLogout();
  }

}
