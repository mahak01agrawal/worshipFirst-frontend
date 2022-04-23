import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  viewAll='https://worship-first-by-tech-priest.herokuapp.com/product/view';
  view = 'https://worship-first-by-tech-priest.herokuapp.com/product/view-categoryid';
  constructor(private http: HttpClient) {}
  public productView(id: string): Observable<any> {
    return this.http.post(this.view, { catid: id });
  }
  public allProduct():Observable<any>{
  return this.http.get(this.viewAll);
  }

  public searchProduct(word:string){
    let api = "https://worship-first-by-tech-priest.herokuapp.com/product/search";
    return this.http.post(api,{keywords:word});
  }
}
