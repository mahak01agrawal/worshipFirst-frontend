import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop-specific',
  templateUrl: './shop-specific.component.html',
  styleUrls: ['./shop-specific.component.css']
})
export class ShopSpecificComponent implements OnInit {
 catid='';
 products:any=[];
  constructor(private ActivateRoute:ActivatedRoute,private productService:ProductService) {
    this.catid=<string>this.ActivateRoute.snapshot.paramMap.get('id')
    this.productService.productView(this.catid).subscribe(data=>{
      console.log(data);
      this.products=data;
    })
   }
  ngOnInit(): void {
  }
}
