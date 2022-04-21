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

  ngOnInit(): void {}
}
