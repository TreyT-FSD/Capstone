import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //TODO: implement login check
  isLoggedIn(): boolean {
    return false;
  }

  //TODO: implement logout
  logout(): void {

  }

}
