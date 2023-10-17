import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <button mat-icon-button (click)="clickToggle()"><mat-icon>menu</mat-icon></button>
      <h1 class="app-name">{{title}}</h1>
      <span class="spacer"></span>
      <button mat-raised-button (click)="logout()">Logout</button>
    </mat-toolbar>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }
    `
  ]
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter<void>();
  title = environment.app_title;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  clickToggle(){
    this.toggle.emit();
  }

  logout(){
    this.authService.logout()
      .subscribe(
        result => {
          localStorage.removeItem('token');
          this.router.navigate(['auth/login']);
        }
      );
  }
}
