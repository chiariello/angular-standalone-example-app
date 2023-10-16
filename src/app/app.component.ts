import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    Loading bar <br>
    Top Menu <br>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Serviziosalute Manage';
}