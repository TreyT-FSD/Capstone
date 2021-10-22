import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { AuthGaurd } from '../services/auth-gaurd.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _cartSvc:CartService, private _authGaurd:AuthGaurd) { }

  ngOnInit(): void {
    this._cartSvc.initCartFromStorage();
  }

  isCartEmpty():boolean{
    return this._cartSvc.isEmpty();
  }

  getCartItems(): Array<CartItem>{
    return this._cartSvc.getCartItems();
  }

  removeCartItem(cartItemToRemove:CartItem){
    this._cartSvc.removeFromCart(cartItemToRemove);
  }

  getCartTotal():number{
    return this._cartSvc.getCartTotal();
  }

  isValidUser():boolean{
    return this._authGaurd.isUser();
  }

}
