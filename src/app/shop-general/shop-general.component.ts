import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop-general',
  templateUrl: './shop-general.component.html',
  styleUrls: ['./shop-general.component.css'],
})
export class ShopGeneralComponent implements OnInit {
  pacakes:any = [];
  products:any = [];
  constructor(private product: ProductService) {
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

  ngOnInit(): void {}
}
