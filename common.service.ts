import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }

  url="https://dummyjson.com/users";

  getAllUsers(){
     
    return this.http.get(this.url);

  }


}
