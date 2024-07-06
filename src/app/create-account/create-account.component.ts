import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Component, Input, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginMdeol } from '../interfaces/login-detail';
import { MemberLoginService } from '../services/member-login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { AppRoutes } from '../app.routes';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, FormsModule, RouterLink],
  templateUrl: './create-account.component.html',
  styleUrls: [
    './create-account.component.css',
    '../../assets/css/util.css',
    '../../assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
  ],
})
export class CreateAccountComponent implements OnInit {
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

  //帳號檢查
  @Input() emailCheck = true;

  onSubmit(formData: LoginMdeol) {
    this.loginService.CreateAccount(formData).subscribe({
      next: (res: string) => {
        this.router.navigate(['/' + AppRoutes.SING_IN]);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
    });
  }
}
