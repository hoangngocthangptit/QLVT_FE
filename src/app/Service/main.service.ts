import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) {

  }
  private token = localStorage.getItem('token');
  private httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json', token: this.token })
  };
  getAllKho(): Observable<any> {
    return this.http.get('http://localhost:8080/kho', this.httpOptions);
  }
  deleteKho(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/kho/delete/${id}`);
  }
  addKho(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/kho/insert', data);
  }
  updateKho(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/kho/edit/${id}`, data);
  }
  getAllChiNhanh(): Observable<any> {
    return this.http.get('http://localhost:8080/chi-nhanh', this.httpOptions);
  }
  deleteChiNhanh(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/chi-nhanh/delete/${id}`);
  }
  addChiNhanh(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/chi-nhanh/insert', data);
  }
  updateChiNhanh(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/chi-nhanh/edit/${id}`, data);
  }

}
