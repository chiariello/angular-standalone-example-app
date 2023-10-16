import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(email: string, password: string){
    localStorage.setItem('token', 'test-token');
  }

  logout(){
    localStorage.removeItem('token');
  }

  isUserLogged(): boolean{
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token') != null;
  }

}
