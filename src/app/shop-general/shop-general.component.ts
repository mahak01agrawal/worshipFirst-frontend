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
  constructor(private product: ProductService,private user:UserService,private cart:CartService) {
    this.product.allProduct().subscribe((data) => {
      console.log(data);
      for(let element of data){
        if(element.category.type=='product')
            this.products.push(element);
      else{
      this.pacakes.push(element);
      }
    }
    });
  }

  add2Cart = "fas fa-shopping-cart";
  addToCart(id:string){
    if(this.user.checkUser()){
      this.cart.addToCart(id).subscribe(data=>{
        localStorage.setItem("cart",JSON.stringify(data));
        let pid = document.getElementById(id);
        let appliedClassList = pid?.classList;
        appliedClassList?.remove("fa-shopping-cart");
        appliedClassList?.add("fa-times");
      });
    }
    else{
      alert("Please Login First");
    }
  }
  ngOnInit(): void {}

  // checkProduct(proId:string){
  //   // return true;
  //   this.cart.viewCart().subscribe(data=>{
  //     for(let element of data.productList){
  //       if(element._id == proId){
  //         let appliedClassList = document.getElementById(proId)?.classList;        
  //         appliedClassList?.remove("fa-shopping-cart");
  //         appliedClassList?.add("fa-times");
  //         console.log("skdjhf");
  //       }
  //     }
  //   })
  //   // if(proId==)
  // }
}
