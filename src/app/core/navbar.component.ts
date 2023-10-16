import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <button mat-icon-button (click)="clickToggle()"><mat-icon>menu</mat-icon></button>
      <h1 class="app-name">Responsive App</h1>
    </mat-toolbar>
  `,
  styles: [
    `

    `
  ]
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter<void>();

  constructor() {}
  clickToggle(){
    this.toggle.emit();
  }
}
