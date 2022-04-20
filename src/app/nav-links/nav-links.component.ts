import { Component, OnInit } from '@angular/core';
import { MediaFileService } from '../media-file.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {
  mediaCategories:any = [];
  constructor(private media:MediaFileService) {
    media.viewCategory().subscribe(data=>{
      this.mediaCategories = data;
    })
   }
  ngOnInit(): void {
  }
}