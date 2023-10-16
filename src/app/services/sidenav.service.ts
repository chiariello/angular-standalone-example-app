import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  flag = true;
  onFlagChange$: BehaviorSubject<boolean> = new BehaviorSubject(this.flag);
  constructor() { }
  toggleMenu() {
    this.flag = !this.flag;
    this.onFlagChange$.next(this.flag);
  }
}
