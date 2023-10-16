import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLink, RouterOutlet} from "@angular/router";
import {SidenavService} from "../services/sidenav.service";
import {Subject, takeUntil} from "rxjs";


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatSidenavModule, RouterLink, RouterOutlet],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav [opened]="flag" [mode]="'side'" fixedTopGap="56">
        <mat-nav-list>
          <a mat-list-item routerLink=".">
            Home
          </a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <p>
          <router-outlet></router-outlet>
        </p>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
        :host{
          height: 100%;
        }
        .sidenav-container{
          height: 100%;
        }
    `

  ]
})
export class SidenavComponent implements OnInit,OnDestroy{
  @Input() mobileQuery: MediaQueryList | undefined;
  flag = true;
  protected _unsubscribe$: Subject<void> = new Subject();

  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.onFlagChange$
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((value) => {
        this.flag = value
      })
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
