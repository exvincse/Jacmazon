import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Item } from '../app/item';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NgFor, NgIf, SignInComponent, RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
