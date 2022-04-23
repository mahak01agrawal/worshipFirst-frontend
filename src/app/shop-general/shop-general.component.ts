import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-shop-general',
  templateUrl: './shop-general.component.html',
  styleUrls: ['./shop-general.component.css'],
})
export class ShopGeneralComponent implements OnInit {
  pacakes:any = [];
  products:any = [];
  cartData:any = [];
  constructor(private product: ProductService,private user:UserService,private cart:CartService) {
    this.product.allProduct().subscribe((data) => {
      for(let element of data){
        try{
          if(element.category.type=='product'){
            this.products.push(element);
        }
        else{
        this.pacakes.push(element);
      }
    }
    catch(err){
    }
        
    }
    });

    cart.viewCart().subscribe(data=>{
      this.cartData = data;
    })
  }

  add2Cart = "fas fa-shopping-cart";
  addToCart(id:string){
    
    if(this.user.checkUser()){
      let pid = document.getElementById(id);
      let appliedClassList = <any>pid?.classList;
      console.log(appliedClassList);
      if(appliedClassList[1]=='fa-shopping-cart'){
        this.cart.addToCart(id).subscribe(data=>{
          appliedClassList?.remove("fa-shopping-cart");
          appliedClassList?.add("fa-times");
        });  
      }
      else{
        this.cart.removeFromCart(id).subscribe(data=>{
          appliedClassList?.remove("fa-times");
          appliedClassList?.add("fa-shopping-cart");
          console.log(data);
        })
      }
      
    }
    else{
      alert("Please Login First");
    }
  }
  ngOnInit(): void {}

  checkProduct(proId:string){
      for(let element of this.cartData.productList){
        if(element._id == proId){
          let appliedClassList = document.getElementById(proId)?.classList;        
          appliedClassList?.remove("fa-shopping-cart");
          appliedClassList?.add("fa-times");
          console.log("props");
        }
      }
      return true;
  }
}
