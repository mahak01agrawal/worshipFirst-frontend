import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor{

  constructor() { }
  intercept(request:HttpRequest<any>,next:HttpHandler){
    let tokenizedRequest = request.clone({
      setHeaders : {
        authorization : "" + localStorage.getItem("token")
      }
    });
    return next.handle(tokenizedRequest);
  }
}
