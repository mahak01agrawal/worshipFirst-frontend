import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {
 package:any=[];
 product:any=[];
  constructor(private category:CategoryService) { 
    category.View('package').subscribe((data) => {
      console.log(data);
      this.package = data;
    });
    category.View('product').subscribe((data) => {
      console.log(data);
      this.product = data;
    });
  }

  ngOnInit(): void {
  }

}
