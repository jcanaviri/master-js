import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestService {
    
  public url: string;

  constructor(
    public _http: HttpClient,
  ) {
    this.url = 'https://jsonplaceholder.typicode.com';
  }

  getUser(userId: number): Observable<any> {
    return this._http.get(`${this.url}/users/${userId}`);
  }

  addPost(post: any):Observable<any> {
    let json = JSON.stringify(post);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(`${this.url}/posts`, json, {headers: headers})
  }
}
