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

  //nhà cung cấp
  getAllNhaCungCap(): Observable<any> {
    return this.http.get('http://localhost:8080/nha-cung-cap', this.httpOptions);
  }
  deleteNhaCungCap(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/nha-cung-cap/delete/${id}`);
  }
  addNhaCungCap(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/nha-cung-cap/insert', data);
  }
  updateNhaCungCap(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/nha-cung-cap/edit/${id}`, data);
  }

  //vật tư
  getAllVatTu(): Observable<any> {
    return this.http.get('http://localhost:8080/vat-tu', this.httpOptions);
  }
  deleteVatTu(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/vat-tu/delete/${id}`);
  }
  addVatTu(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/vat-tu/insert', data);
  }
  updateVatTu(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8080/vat-tu/edit/${id}`, data);
  }

}
