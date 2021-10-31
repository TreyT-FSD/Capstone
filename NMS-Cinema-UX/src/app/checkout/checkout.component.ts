import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { CartItem } from '../models/CartItem';
import { Order } from '../models/order';
import { User } from '../models/user';
import { UserBilling } from '../models/user-billing';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _cartSvc:CartService, private _orderSvc: OrderService) { }
  customer:User = new User();
  customerBilling: UserBilling = new UserBilling();
  cartItemSnapshot:Array<CartItem> = new Array<CartItem>();
  cartTotal: number = 0;

  ngOnInit(): void {
    this.customer=JSON.parse(sessionStorage.getItem("user")!);
    this._cartSvc.getCartItems().forEach(element => {
      this.cartItemSnapshot.push(element);
    });
    this.cartTotal=this._cartSvc.getCartTotal();
  }

  getCartItems(): Array<CartItem>{
    return this._cartSvc.getCartItems();
  }

  getCartTotal():number{
    return this._cartSvc.getCartTotal();
  }

  checkout(): void{

    let order = new Order();
    order.cart=this._cartSvc.cart;
    order.customerId=this.customer.id;

    //submit order
    this._orderSvc.submitOrder(order).subscribe(
      result=>{
        this._cartSvc.clearCart();
      },
      error=>{
        console.log("Error during submit order. Err:" + error);
      });
  }

}
