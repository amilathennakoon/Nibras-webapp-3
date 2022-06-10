import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeDataService } from 'src/app/services/homeData.service';
import { Post } from '../shared/models/post';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  headerData: string = "Blogs";
  totalBlogPosts: string;

  homeDataSubscription: Subscription;

  blogPostList: Post[];
  currentDate: Date = new Date();

  author:string="Nibras Author"

  constructor(private homeService: HomeDataService) { }

  ngOnInit(): void {
    this.homeDataSubscription = this.homeService.GetAllBlogPosts().subscribe((postList: Post[]) => {
      this.blogPostList = postList;
      this.totalBlogPosts = `Total blog posts: ${this.blogPostList.length}`;
    });
  }

  ngOnDestroy(): void {
    this.homeDataSubscription.unsubscribe();
  }
}
