import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      dashboard works!
    </p>
  `,
  styles: [
  ]
})
export default class DashboardComponent {

}
