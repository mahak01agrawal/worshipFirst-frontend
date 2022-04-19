import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
<<<<<<< HEAD
  constructor(private http: HttpClient) {}
  view =
    'https://worship-first.herokuapp.com/product-category/view-product-category';
  public View(type: string): Observable<any> {
    return this.http.post<any>(this.view, { type: type });
=======
  view = 'http://localhost:3000/product-category/view-product-category';
  constructor(private http: HttpClient) {}
  public View(type: string): Observable<any> {
    return this.http.post<any>(this.view, {
      type: type,
    });
>>>>>>> 66d9cbcb39cfb919b840c17f0d7ebff69b83c3f0
  }
}
