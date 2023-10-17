import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    return this.http
      .post<{data: {token: string}}>(environment.base_path + '/global/login', {email, password});
  }

  logout(){
    return this.http.get(environment.base_path + '/global/logout');
  }

  isUserLogged(): boolean{
    return localStorage.getItem('token') != null;
  }

  getAuthorizationToken(){
    return localStorage.getItem('token');
  }

}
