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

  // Define the Title for description panel
  headerData: string = "Blogs";
  totalBlogPosts: string;

  //default author
  author: string = "Nibras Author"
  blogPostList: Post[];
  currentDate: Date = new Date();
  homeDataSubscription: Subscription;

  //inject the home service to the costricter
  constructor(private homeService: HomeDataService) { }

  ngOnInit(): void {

    // load the all posts
    this.homeDataSubscription = this.homeService.GetAllBlogPosts().subscribe((postList: Post[]) => {
      this.blogPostList = postList;

      //get the set the all post count
      this.totalBlogPosts = `Total blog posts: ${this.blogPostList.length}`;
    });
  }

  ngOnDestroy(): void {
    
    //Destroy the homeDataSubscription instance
    this.homeDataSubscription.unsubscribe();
  }
}
