import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  constructor(private http:HttpClient) { }
  apiUrl='http://localhost:3000/api/message'
  userUrl='https://www.nytimes.com/2024/08/06/movies/josh-hartnett-interview-trap.html'

  // get
messages() { 
    return this.http.get(this.userUrl); 
} 
fetchUser(){
  return this.http.get(this.userUrl)
}

// post
createUsers(user:any):Observable<any[]>{
  const headers=new HttpHeaders({'Content-Type':'application/json'})
  return this.http.post<any[]>(this.userUrl,user,{headers})
}

deleteUser(userId:any):Observable<any[]>{
  return this.http.delete<any[]>(`${this.userUrl}/${userId}`)
}

// fetchNews() {
//   const headers = new HttpHeaders()
//   .set('api-key', 'd8QDBZj5Wy4a7HcTJCRy8kZdTNZHZbbC');
//   return this.http.get('https://api.nytimes.com/svc/topstories/v2/home.json',{headers})
//   }

fetchNews() {
  const apiKey = 'd8QDBZj5Wy4a7HcTJCRy8kZdTNZHZbbC';
  const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;

  return this.http.get(url)
    .pipe(
      (error => {
        console.error('Error fetching news:', error);
        return (error);
      })
    );
}


}

// worked