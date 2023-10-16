import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./core/navbar.component";
import {SidenavComponent} from "./core/sidenav.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SidenavComponent, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatIconModule, RouterLink],
  template: `
    <div class="main-container">
      <app-navbar></app-navbar>
      <app-sidenav></app-sidenav>
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
    `
  ],
})
export class AppComponent{

  title = 'Serviziosalute Manage';

}
