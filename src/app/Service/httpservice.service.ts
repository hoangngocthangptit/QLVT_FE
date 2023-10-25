import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  callAPIUploadFilesAndData(API_URL: any, file: File, params: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  public post(url: any, data: any, head: any): any {
    return this.http.post(url, data, head);
  }
  public put(url: any, data: any, head: any): any {
    return this.http.put(url, data, head);
  }

  public delete(url: any, options: any): Observable<any> {
    return this.http.delete(url, options);
  }


  public get(url: any, options: any): Observable<any> {
    return this.http.get(url, options);
  }
  public getRequest(url: any): any {
    return this.http.get(url);
  }
}
