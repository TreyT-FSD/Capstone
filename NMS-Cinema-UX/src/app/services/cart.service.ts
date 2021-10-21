import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = new Cart();

  constructor() { }

  // TODO: see if this can go in constructor instead
  initCartFromStorage() {
    if (this.cart.cartItems.length == 0) {
      //check to see if there was a cart in storage  
      let localCart = localStorage.getItem("cart");
      if (localCart != null) {
        this.cart = JSON.parse(localCart);
      }
      else {
        this.cart = new Cart();
      }
    }
  }

  addToCart(cartItem: CartItem) {
    this.cart.cartItems.push(cartItem);
    this.updateCartTotal();
  }

  removeFromCart(cartItem: CartItem) {
    this.cart.cartItems.splice(this.cart.cartItems.indexOf(cartItem), 1);
    this.saveCart();
    this.updateCartTotal();
  }

  clearCart() {
    this.cart.cartItems = new Array<CartItem>();
    this.cart.totalPrice = 0;

    localStorage.removeItem('cart');
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  getCartItems(): Array<CartItem> {
    return this.cart.cartItems;
  }

  getCartTotal(): number {
    return this.cart.totalPrice;
  }

  isEmpty(): boolean {
    if (this.cart.cartItems.length == 0) {
      return true;
    }
    return false;
  }

  updateCartTotal(){
    let tempPrice = 0;
    this.cart.cartItems.forEach(item => {
      tempPrice+=item.subTotal;
    });
    this.cart.totalPrice=tempPrice;
  }

}
