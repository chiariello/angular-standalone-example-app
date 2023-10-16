import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./core/navbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, RouterLink, NavbarComponent, MatSidenavModule],
  template: `
    <div class="main-container">
      <app-navbar
        *ngIf="authService.isUserLogged()"
        (toggle)="sidenav.toggle()">
      </app-navbar>
      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav
          #sidenav mode="side" [opened]="authService.isUserLogged()">Sidenav content</mat-sidenav>
        <mat-sidenav-content>
          <router-outlet></router-outlet>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [
    `
      .main-container {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      .sidenav-container{
        height: 100%;
      }
    `
  ],
})
export class AppComponent{

  authService = inject(AuthService);
  title = 'Serviziosalute Manage';

}
