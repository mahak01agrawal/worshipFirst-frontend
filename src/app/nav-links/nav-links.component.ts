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
  photoframes : any=[];
  constructor(private media:MediaFileService,private category:CategoryService) {
    media.viewCategory().subscribe(data=>{
      this.mediaCategories = data;
    });
    category.View('package').subscribe((data) => {
      this.package = data;
    });
    category.View('product').subscribe((data) => {
      this.product = data;
    });
    category.View('photo frames').subscribe((data) => {
      this.photoframes = data;
    });
   }
 package:any=[];
 product:any=[];
 ngOnInit(){}
}