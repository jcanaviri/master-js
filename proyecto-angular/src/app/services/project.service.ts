import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService {
  public url: string;
  
  constructor(
    private _httpClient: HttpClient,
  ) {
    this.url = Global.url;
  }

  testService() {
    return 'Testing service';
  }
}
