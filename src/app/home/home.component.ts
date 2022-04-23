import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { CartService } from '../cart.service';
import { PriestService } from '../priest.service';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../header/header.component.css']
})
export class HomeComponent implements OnInit {

  user! : SocialUser;
  email:string="";
  password:string="";
  userProfile:any;
  panditProfile:any;
  cartList:any;
  constructor(private authService : SocialAuthService,private userService:UserService,private priest:PriestService,private router:Router,private cartService:CartService, private productService:ProductService) {
    // this.cart = JSON.parse(localStorage.getItem("cart") || "");
    this.hello();
   }
   totalPrice?:number=10;
   hello(){
    this.cartService.viewCart().subscribe(data=>{
      this.cartList = data.productList;
      this.totalPrice = 0;
      for(let element of this.cartList){
        this.totalPrice += element.price;
      }
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
  // searchBtn(search: any) {
  //   search.classList.toggle('active');
  // }
  
  loginAsUser(){
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

  words:string="";
  searchProduct(){
    // let val = event.target.value;
    this.router.navigate(["shops"," "]);
  }

  checkout(){
    this.router.navigate(["place-order"]);
  }
}
