import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  viewAll='https://worship-first.herokuapp.com/product/view';
  view = 'https://worship-first.herokuapp.com/product/view-categoryid';
  constructor(private http: HttpClient) {}
  public productView(id: string): Observable<any> {
    return this.http.post(this.view, { catid: id });
  }
  public allProduct():Observable<any>{
  return this.http.get(this.viewAll);
  }
}
