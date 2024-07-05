import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef, inject, OnInit, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginMdeol } from '../interfaces/login-detail';
import { MemberLoginService } from '../services/member-login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { AppRoutes } from '../app.routes';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, FormsModule, RouterLink, CreateAccountComponent],
  templateUrl: './sign-in.component.html',
  styleUrls: [
    './sign-in.component.css',
    '../../assets/css/util.css',
    '../../assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
  ],
})
export class SignInComponent implements OnInit, AfterViewInit {
  private loginService = inject(MemberLoginService);
  errorMessage: string = '';
  AppRoutes = AppRoutes;


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loginService.GetAntiforgeryToken().subscribe({
      next: (res: string) => {
        //還沒做
        console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching token:', error);
      },
    });
  }

  ngAfterViewInit(): void {}

  //帳號檢查
  @Input() emailCheck = true;

  onSubmit(formData: LoginMdeol) {
    this.loginService.Login(formData).subscribe({
      next: (res: string) => {
        localStorage.setItem('jwtToken', res); // Store token in localStorage
        this.router.navigate(['/']);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
        this.errorMessage = '帳號或密碼錯誤';
      },
    });
  }
}
