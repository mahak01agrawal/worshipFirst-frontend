import { Component, OnInit } from '@angular/core';
import { MediaFileService } from 'src/app/media-file.service';

@Component({
  selector: 'app-banner-audio',
  templateUrl: './banner-audio.component.html',
  styleUrls: ['./banner-audio.component.css'],
})
export class BannerAudioComponent implements OnInit {
  mediaFiles: any[]= [];
  constructor(private media:MediaFileService) { 
    media.viewMediaFile().subscribe(data=>{
      console.log(data);
      this.mediaFiles = <any>data;
    })
  }
  ngOnInit(): void {
  }
}
