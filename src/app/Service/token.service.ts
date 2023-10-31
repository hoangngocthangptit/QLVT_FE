import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public valideUser = false;
  public loggedIn = false;
  constructor() { }
  public handle(data) {
    this.set(data);
  }
  // setting token in local
  public set(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('email', data.obj.email);
    localStorage.setItem('hoTen', data.obj.hoTen);
    // localStorage.setItem('phone', data.obj.mobileNumber);
    localStorage.setItem('id',data.obj.userId);
    localStorage.setItem('role',data.obj.role);
  }
  // getting token from the local storage
 public get() {
   return localStorage.getItem('token');
  }
  // Removing item from the local storage
  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('hoTen');
    localStorage.removeItem('role');
    localStorage.removeItem('phone');
    localStorage.removeItem('userid');
    localStorage.removeItem('link')
    sessionStorage.clear();
  }
  logedIn(value: boolean) {
  if ( this.get() != null) {
    return this.loggedIn = true;
  }
  }
  loggedStatus() {
  return this.logedIn(this.loggedIn);
  }
}
