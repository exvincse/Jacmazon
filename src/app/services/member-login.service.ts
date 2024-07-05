import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginMdeol, result } from '../interfaces/login-detail';

const apiUrl = environment.apiUrl;
//const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MemberLoginService {
  private http = inject(HttpClient);
  constructor() {}

  /**
   * 取得表單防偽令牌
   */
  GetAntiforgeryToken(): any {
    return this.http.get(apiUrl, { responseType: 'text' });
  }

    /**
   * 登入
   * @param data
   * @returns
   */
    Login(data: LoginMdeol): any {
      let body = new URLSearchParams();
      body.set('Email', data.email);
      body.set('password', data.password);
  
      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text' as 'json'  // 指定响应类型为 text
      };
      return this.http.post(apiUrl + '/Login', body.toString(), options);
    }

    /**
   * 建立帳戶
   * @param data
   * @returns
   */
    CreateAccount(data: LoginMdeol): any {
      let body = new URLSearchParams();
      body.set('Email', data.email);
      body.set('password', data.password);
  
      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text' as 'json'  // 指定响应类型为 text
      };
      return this.http.post(apiUrl + '/CreateAccount', body.toString(), options);
    }
}
