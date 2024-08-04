import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  constructor(private http:HttpClient) { }

  private url='http://localhost:3000/data'

  getData(){
    return this.http.get(this.url)
  }

  getMessage() { 
    return this.http.get('http://localhost:3000/api/message'); 
} 


}

// worked