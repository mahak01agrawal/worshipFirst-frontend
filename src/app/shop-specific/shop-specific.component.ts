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
  catid = '';
  products: any = [];
  cartData: any;
  constructor(private ActivateRoute: ActivatedRoute, private productService: ProductService, private user: UserService, private cart: CartService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.catid = <string>this.ActivateRoute.snapshot.paramMap.get("id");
        if (this.catid.match('^[a-zA-Z]')) {
          this.productService.searchProduct(this.catid).subscribe(data => {
            this.products = data;
            if(!this.products.length){
              this.productService.allProduct().subscribe(data => {
                this.products = data;
              })
            }
          })
        }
        else {
          this.productService.productView(this.catid).subscribe(data => {
            this.products = data;
          })
        }

      }
    });
    if (localStorage.getItem("user")) {
      cart.viewCart().subscribe(data => {
        if(data)
          this.cartData = data;
        else
          this.cartData = "";
      })
    }
  }
  ngOnInit(): void { }
  add2Cart = "fas fa-shopping-cart";
  addToCart(id: string) {
    if (this.user.checkUser()) {
      let pid = document.getElementById(id);
      let appliedClassList = <any>pid?.classList;
      if (appliedClassList[1] == 'fa-shopping-cart') {
        this.cart.addToCart(id).subscribe(data => {
          appliedClassList?.remove("fa-shopping-cart");
          appliedClassList?.add("fa-times");
        });
      }
      else {
        this.cart.removeFromCart(id).subscribe(data => {
          appliedClassList?.remove("fa-times");
          appliedClassList?.add("fa-shopping-cart");
        })
      }
    }
    else {
      alert("Please Login First");
    }
  }
  checkProduct(proId: string) {
    if (localStorage.getItem("user")) {
      if(!(this.cartData=="")){
        for (let element of this.cartData.productList) {
          if (element._id == proId) {
            let appliedClassList = document.getElementById(proId)?.classList;
            appliedClassList?.remove("fa-shopping-cart");
            appliedClassList?.add("fa-times");
          }
        }
      }
    }
    return true;
  }
}
