import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  socialLogin(user:SocialUser):Observable<any>{
    let socialApi = "https://worship-first-by-tech-priest.herokuapp.com/user/login-by-social-media";
    return this.http.post(socialApi,{name : user.name,email : user.email,image : user.photoUrl})
  }

  userLogin(email:string,password:string):Observable<any>{
    let userLoginApi = "https://worship-first-by-tech-priest.herokuapp.com/user/login";
    return this.http.post(userLoginApi,{email:email,password:password});
  }

  checkToken():any{
    return localStorage.getItem("token");
  }
  checkUser(){
    return localStorage.getItem("user");
  }
}
