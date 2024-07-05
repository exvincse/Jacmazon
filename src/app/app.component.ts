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
export class AppComponent {
  emailCheck = false;

  fetchTest(newData: string) {
    if (newData == 'GO') {
      console.log('123');
      this.emailCheck = true;
    }
    const user = {
      name4: 'John Doe',
      name5: 'John Doe',
      age: 30,
    };

    const list = [
      { id: 1, name: 'Jack' },
      { id: 2, name: 'Mike' },
      { idx: 3, name2: '1' },
      { idxx: 4, nma: '4' },
    ];

    fetch('http://localhost:5092/api/webapi', {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} + ${response.text}`);
        }
        return response;
      })
      .then((response) => {
        console.log(response);
      });
  }
}
