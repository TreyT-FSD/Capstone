import { CartItem } from "./CartItem";

export class Cart {
    // id: number;
    cartItems: Array<CartItem>;
    totalPrice: number;

    constructor() {
        // this.id = 0;
        this.cartItems = new Array<CartItem>();
        this.totalPrice = 0;
    }
}