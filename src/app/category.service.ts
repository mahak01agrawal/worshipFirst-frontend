import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  view = 'http://localhost:3000/product-category/view-product-category';
  constructor(private http: HttpClient) {}
  public View(type: string): Observable<any> {
    return this.http.post<any>(this.view, {
      type: type,
    });
  }
}
