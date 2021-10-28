import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // ORDER_API: string = "http://localhost:3000";
  ORDER_API: string = "http://localhost:8085";

  constructor(private _http: HttpClient) { }

  submitOrder(order: Order): Observable<Order> {
    return this._http.post<Order>(this.ORDER_API + "/order", order);
  }

  getOrdersByCustomerId(id: number): Observable<Order[]> {
    return this._http.get<Order[]>(this.ORDER_API + "/order?customerId=" + id);
  }

}
