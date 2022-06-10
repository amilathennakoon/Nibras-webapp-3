import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-recent-blogs',
  templateUrl: './recent-blogs.component.html',
  styleUrls: ['./recent-blogs.component.scss']
})
export class RecentBlogsComponent implements OnInit {

  // input post data array
  @Input() posts: Post[];
  
  constructor() { }
 
  ngOnInit(): void {
  }

}
