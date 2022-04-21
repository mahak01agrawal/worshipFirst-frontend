import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaFileService {

  constructor(private http:HttpClient) { }
  addCategory(name:string){
    let api = "https://worship-first-by-tech-priest.herokuapp.com/mediafile-category/add";
    return this.http.post(api,{name});
  }
  viewCategory(){
    let api = "https://worship-first-by-tech-priest.herokuapp.com/mediafile-category/view";
    return this.http.get(api);
  }

  viewMediaFile(){
    let api = "https://worship-first-by-tech-priest.herokuapp.com/mediafile/view";
    return this.http.get(api);
  }

  viewMediaByType(type:string){
    let api = "https://worship-first-by-tech-priest.herokuapp.com/mediafile/view-by-type/"+type;
    return this.http.get(api);
  }

  viewMediaFileByCat(id:string):Observable<any>{
    let api = "https://worship-first-by-tech-priest.herokuapp.com/mediafile/view-by-cat/"+id;
    return this.http.get(api);
  }

}
