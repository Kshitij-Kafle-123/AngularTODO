import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBean(){
     return this.http.get('http://localhost:8080/hello-world-bean');
   // console.log("exe");
  }
}
