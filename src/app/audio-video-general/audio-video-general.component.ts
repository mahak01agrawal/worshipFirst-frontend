import { Component, OnInit } from '@angular/core';
import { MediaFileService } from '../media-file.service';

@Component({
  selector: 'app-audio-video-general',
  templateUrl: './audio-video-general.component.html',
  styleUrls: ['./audio-video-general.component.css']
})
export class AudioVideoGeneralComponent implements OnInit {
  videos:any = [];
  audios:any = [];
  constructor(private media:MediaFileService) { 
    media.viewMediaByType("video").subscribe(data=>{
      this.videos = data;
    });
    media.viewMediaByType("audio").subscribe(data=>{
      this.audios = data;
    });
  }

  ngOnInit(): void {
  }

}
