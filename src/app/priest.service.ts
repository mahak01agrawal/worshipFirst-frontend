import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriestService {

  constructor(private http:HttpClient) { }
  priestLogin(email:string,password:string):Observable<any>{
    let loginApi = "https://worship-first-by-tech-priest.herokuapp.com/priest/priest_login";
    return this.http.post(loginApi,{email,password});
  }
  checkToken():any{
    return localStorage.getItem("token");
  }
  checkUser(){
    
  }
}