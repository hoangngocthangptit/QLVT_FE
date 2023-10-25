import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  
export class CrawlService {

  constructor(private http: HttpClient) {


   }
   private token = localStorage.getItem('token');
   private httpOptions = {
    headers: new HttpHeaders ({'content-type': 'application/json' , token: this.token})
    };
   getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/datacrawler',this.httpOptions);
  }
  getDetail(path: string): Observable<any> {
    const params = new HttpParams().set('path', path);
    const options = { params: params, headers: this.httpOptions.headers };
    return this.http.get('http://localhost:8080/datacrawler/detail',options);
  }
  crawl(path: string) {
    const params = new HttpParams().set('path', path);
    const options = { params: params, headers: this.httpOptions.headers }
    return this.http.post('http://localhost:8080/datacrawler', null, options);
  }
 delete(id: number): Observable<any> {
  return this.http.delete(`http://localhost:8080/datacrawler/${id}`);
}



}
