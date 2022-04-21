import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  addToCart(pid:string):Observable<any>{
     let api = "https://worship-first.herokuapp.com/cart/add"
     let userId = JSON.parse(localStorage.getItem("user") || " ");
    userId = userId._id;
     return this.http.post(api,{userId:userId,productId:pid});
  }

  viewCart():Observable<any>{
    let userId = JSON.parse(localStorage.getItem("user") || "{}");
    userId = userId._id;
    let api = "https://worship-first.herokuapp.com/cart/view/" +userId ;
    return this.http.get(api);
  }
  removeFromCart(pid:string){
    let cartId = JSON.parse(localStorage.getItem("cart") || " ");
    cartId = cartId._id;
    let api = "https://worship-first.herokuapp.com/cart/delete/" +cartId+"/"+pid ;
    return this.http.post(api,{});
  }
}