import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  createOrder(order:any):Observable<any>{
    // order.amount = order.amount+'00';
    // order.amount = order.amount*1;
    let api = "https://worship-first-by-tech-priest.herokuapp.com/order/create";
    return this.http.post(api,{order});
  }
}
