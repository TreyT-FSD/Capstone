import { Cart } from "./cart";

export class Order{

    id:number;
    customerId:number;
    cart: Cart;

    constructor(){
        this.id=0;
        this.customerId=0;
        this.cart=new Cart();
    }
}