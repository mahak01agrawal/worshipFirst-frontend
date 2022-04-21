import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  viewAll='https://worship-first-by-tech-priest.herokuapp.com/product-category/view';
  view =
    'https://worship-first.herokuapp.com/product-category/view-product-category';
  public View(type: string): Observable<any> {
    return this.http.post<any>(this.view, { type: type });

  }
  
}
