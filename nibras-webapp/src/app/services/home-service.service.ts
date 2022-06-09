import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClient) { }

  // Get All posts
  GetAllBlogPosts(): Observable<any> {
    return this.http.get(environment.baseUrl + 'posts');
  }
}
