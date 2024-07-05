import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  //{ path: 'AppComponent', component: AppComponent },
  { path: AppRoutes.SING_IN, title: '登入 - Jacmazon 帳戶', component: SignInComponent },
  { path: AppRoutes.CREATE_ACCOUNT, title: '註冊 - Jacmazon 帳戶', component: CreateAccountComponent },
  { path: AppRoutes.HOME, title: '首頁', component: HomeComponent },
  { path: '', title: '首頁', component: HomeComponent, pathMatch: 'full' },
  { path: '**', title: '查無此頁面', component: PageNotFoundComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideAnimations(), provideRouter(routes), provideHttpClient(withFetch())],
};
