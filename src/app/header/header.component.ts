import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  SocialUser,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { CartService } from '../cart.service';
import { PriestService } from '../priest.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  user! : SocialUser;
  email:string="";
  password:string="";
  userProfile:any;
  panditProfile:any;
  cartList:any;
  constructor(private authService : SocialAuthService,private userService:UserService,private priest:PriestService,private router:Router,private cartService:CartService) {
    // this.cart = JSON.parse(localStorage.getItem("cart") || "");
    this.cartService.viewCart().subscribe(data=>{
      this.cartList = data.productList;
    })
   }
   hello(){
    this.cartService.viewCart().subscribe(data=>{
      this.cartList = data.productList;
    })
   }
  ngOnInit(): void {
    this.authService.authState.subscribe((data: any) => {
      this.user = data;
      this.userService.socialLogin(this.user).subscribe(data=>{
        this.userProfile = data;
        localStorage.setItem("token",data.token);
        localStorage.setItem("user",JSON.stringify(data.user));
      });
    });
  }

  removeFormCart(pid:string){
    this.cartService.removeFromCart(pid).subscribe(data=>{
      console.log(data);
      this.hello();
    }) 
  }

  socialLogin() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(){
    localStorage.removeItem("token");
    this.authService.signOut();
  }

  navLinks(nav: any) {
    let closer: any = document.querySelector('#closer');
    closer.style.display = 'block';
    nav.classList.toggle('active');
  }
  showCart(cart: any) {
    let closer: any = document.querySelector('#closer');
    closer.style.display = 'block';
    cart.classList.toggle('active');
    this.hello();
  }
  showLogin(login: any) {
    let closer: any = document.querySelector('#closer');
    closer.style.display = 'block';
    login.classList.toggle('active');
  }

  closeBar() {
    let closer: any = document.querySelector('#closer');
    let nav: any = document.querySelector('#nav');
    let cart: any = document.querySelector('#cart');
    let login: any = document.querySelector('#login');
    let user: any = document.querySelector('#user');

    closer.style.display = 'none';
    nav.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
  }
  searchBtn(search: any) {
    search.classList.toggle('active');
  }
  
  loginAsUser(){
    console.log(this.email+" "+this.password);
    this.userService.userLogin(this.email,this.password).subscribe(data=>{
      this.userProfile = data.result;
      localStorage.setItem("user",JSON.stringify(data.result));
      localStorage.setItem('token', data.token);
    });
  }

  loginAsPandit() {
    this.priest.priestLogin(this.email, this.password).subscribe((data) => {
      if(data.status == "success"){
      localStorage.setItem('token', data.token);
      this.router.navigate(['priest'])
      };
    });
  }

  userIsLoggedIn(){
    if(this.userService.checkUser()){
      this.userProfile = JSON.parse(this.userService.checkUser()|| " ");
      return true;
    }
    return false;
  }

  isLoggedIn(){
    if(this.priest.checkToken()){
      return true;
    }
    return false;
  }
  signout() {
    localStorage.removeItem('token');
    localStorage.removeItem("user");
  }
}