import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http'

@Injectable()
export class SubmissionService {

  url = "172.23.238.179:3000/submissions";

  constructor(private http: Http) { }

  writeTo(object){
    this.http.post(this.url, object).subscribe(res => {});
  }  
}
