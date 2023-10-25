import { Injectable } from '@angular/core';
import { HttpserviceService } from './httpservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
 public signUp(data: any) {
    return this.http.post(`http://localhost:8080/registration`, data);
  }
  public signIn(data: any) {
    return this.http.post(`http://localhost:8080/user/login`, data);
  }
  constructor(private http: HttpClient ,private httpService: HttpserviceService) { }
}
