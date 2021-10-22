import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { User } from '../models/user';
import { AuthGaurd } from '../services/auth-gaurd.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = new User();
  orders: Array<Order> = new Array<Order>();

  constructor(private _authGuard: AuthGaurd, private _router:Router, private _orderSvc:OrderService) {}

  ngOnInit(): void {
    let userFromSession = JSON.parse(sessionStorage.getItem("user")!) as User;
    Object.assign(this.user, userFromSession);
    this._orderSvc.getOrdersByCustomerId(this.user.id).subscribe(
      result=>{
        result.forEach(element => {
          this.orders.push(element);
        });
      },
      error=>{
        console.log("Error while retrieving order details for customerId: " + this.user.id);
      });
  }

  logout(){
    this._authGuard.userLoguout();
    this._router.navigate(['/browse']);
  }

}
