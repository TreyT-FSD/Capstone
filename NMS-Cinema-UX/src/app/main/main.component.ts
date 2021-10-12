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

  isAdmin(): boolean{
    return this._authGaurd.isAdmin();
  }

  adminLogout(){
    this._authGaurd.adminLogout();
  }

}
