import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  constructor() {}

  /**
   * 取得產品清單，測試JWT Token
   */
  GetProductList(): any {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('accessToken')}`);
    return this.http.get(apiUrl + '/ProductList', { headers });
  }

  /**
   * 取得新的Access Token
   */
  RefreshToken(): any {
    return this.http.post(apiUrl + '/Refresh_Token', localStorage.getItem('refreshToken'));
  }
}
