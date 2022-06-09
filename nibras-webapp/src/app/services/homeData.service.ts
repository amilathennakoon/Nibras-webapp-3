import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../dashboard/shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor(private http: HttpClient) { }

  // Get All posts
  GetAllBlogPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.baseUrl + 'posts');
  }
}
