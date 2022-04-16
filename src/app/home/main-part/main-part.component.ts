import { Component, Injector, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-main-part',
  templateUrl: './main-part.component.html',
  styleUrls: ['./main-part.component.css'],
})
export class MainPartComponent implements OnInit {
  packageList: any = [];
  productList: any = [];
  product='product';
  package='package';
  constructor(private category: CategoryService) {
    console.log("one");
    category.View(this.package).subscribe((data) => {
      console.log(data);
      console.log("gjhf");
      this.packageList = data;
    });
    category.View(this.product).subscribe((data1) => {
      console.log(data1);
      this.productList = data1;
    });
  }
  ngOnInit(): void {}
}