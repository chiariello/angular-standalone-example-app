import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule, MatSelectModule, MatIconModule, MatCheckboxModule, ReactiveFormsModule],
  template: `
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <form (ngSubmit)="login(form)" novalidate [formGroup]="form">
        <mat-card class="login-card">
          <mat-card-header>
            <mat-card-title class="pb-3">Login</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="row">
              <div class="col">
                <mat-form-field>
                  <mat-label>Email</mat-label>
                  <input matInput [type]="'email'" formControlName="email">
                  <mat-icon matSuffix>email</mat-icon>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <mat-form-field>
                  <mat-label>Password</mat-label>
                  <input matInput [type]="hide ? 'password' : 'text'" formControlName="password">
                  <button type="button" mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
                  </button>
                </mat-form-field>
              </div>
            </div>

          </mat-card-content>
          <mat-card-actions class="d-flex justify-content-between p-3">
            <mat-checkbox>
              Ricordami
            </mat-checkbox>
            <button type="submit" mat-raised-button color="primary">Login</button>
          </mat-card-actions>
        </mat-card>
      </form>
    </div>

  `,
  styles: [
    `
      .login-card {
        min-width: 400px;
      }
      mat-form-field{
        width: 100%;
      }
    `
  ]
})
export default class LoginComponent{
  hide = true;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  form = inject(FormBuilder).group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  login(form: FormGroup){
    this.authService
      .login(form.value.email, form.value.password)
      .subscribe(result => {
        localStorage.setItem('token', result.data.token);
        this.router.navigate(['admin']);
      });
  }

}
