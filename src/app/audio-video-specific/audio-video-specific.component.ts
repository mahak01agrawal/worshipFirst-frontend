import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MediaFileService } from '../media-file.service';

@Component({
  selector: 'app-audio-video-specific',
  templateUrl: './audio-video-specific.component.html',
  styleUrls: ['./audio-video-specific.component.css']
})
export class AudioVideoSpecificComponent implements OnInit {
  id:any;
  audios:any=[];
  videos:any=[];
  constructor(private router:Router,private route:ActivatedRoute,private media:MediaFileService) { 
    this.router.events.subscribe(event=>{
      this.id=this.route.snapshot.paramMap.get("id");
      if(event instanceof NavigationEnd){
        this.media.viewMediaFileByCat(this.id).subscribe(data=>{
          console.log(data);
          this.audios=[];
          this.videos = [];
          for(let element of data){
            if(element.type == "audio"){
              this.audios.push(element);
            }
            else{
              this.videos.push(element);
            }
          }
        })
      }
    });
  }

  ngOnInit(): void {
    
  }

}
