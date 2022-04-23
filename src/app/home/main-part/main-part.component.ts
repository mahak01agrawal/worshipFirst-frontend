
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-main-part',
  templateUrl: './main-part.component.html',
  styleUrls: ['./main-part.component.css'],
})
export class MainPartComponent implements OnInit {

  productList: any[] = [];
  packageList: any[] = [];

  constructor(private category: CategoryService,private router:Router) {
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

  
