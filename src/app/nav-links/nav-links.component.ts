import { Component, OnInit } from '@angular/core';
import { MediaFileService } from '../media-file.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {
  mediaCategories:any = [];
  constructor(private media:MediaFileService,private category:CategoryService) {
    media.viewCategory().subscribe(data=>{
      this.mediaCategories = data;
    });
    category.View('package').subscribe((data) => {
      console.log(data);
      this.package = data;
    });
    category.View('product').subscribe((data) => {
      console.log(data);
      this.product = data;
    });
   }
 package:any=[];
 product:any=[];
 ngOnInit(){}
}