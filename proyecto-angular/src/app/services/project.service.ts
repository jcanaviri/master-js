import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from '../models/project';
import { environment } from "src/environments/environment";

@Injectable()
export class ProjectService {
  public url: string;
  
  constructor(
    private _httpClient: HttpClient,
  ) {
    this.url = environment.url;
  }

  testService() {
    return 'Testing service';
  }

  saveProject(p: Project): Observable<any> {
    let params = JSON.stringify(p);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._httpClient.post(`${this.url}/save-project`, params, { headers })
  }
}
