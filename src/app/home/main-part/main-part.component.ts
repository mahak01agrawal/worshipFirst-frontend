<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, Injector, OnInit } from '@angular/core';
>>>>>>> 66d9cbcb39cfb919b840c17f0d7ebff69b83c3f0
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-main-part',
  templateUrl: './main-part.component.html',
  styleUrls: ['./main-part.component.css'],
})
export class MainPartComponent implements OnInit {
<<<<<<< HEAD
  productList: any = [];
  packageList: any = [];

  constructor(private category: CategoryService) {
    category.View('package').subscribe((data) => {
      console.log(data);
      this.packageList = data;
    });

    category.View('product').subscribe((data) => {
      console.log(data);
      this.productList = data;
    });
  }
  ngOnInit(): void {}
}
=======
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
>>>>>>> 66d9cbcb39cfb919b840c17f0d7ebff69b83c3f0
