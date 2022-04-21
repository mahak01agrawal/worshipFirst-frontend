import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-shop-specific',
  templateUrl: './shop-specific.component.html',
  styleUrls: ['./shop-specific.component.css']
})
export class ShopSpecificComponent implements OnInit {
 catid='';
 products:any=[];
  constructor(private ActivateRoute:ActivatedRoute,private productService:ProductService,private user:UserService,private cart:CartService,private router:Router) {
    this.router.events.subscribe(event=>{
      this.catid=<string>this.ActivateRoute.snapshot.paramMap.get("id");
      if(event instanceof NavigationEnd){
        this.productService.productView(this.catid).subscribe(data=>{
          this.products = data;  
        })
      }
    });
   }
  ngOnInit(): void {
  }

  addToCart(id:string){
    if(this.user.checkUser()){
      this.cart.addToCart(id).subscribe(data=>{
        localStorage.setItem("cart",JSON.stringify(data));
      });
    }
    else{
      alert("Please Login First");
    }
  }

}
