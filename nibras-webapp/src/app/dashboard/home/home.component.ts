import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeDataService } from 'src/app/services/homeData.service';
import { Post } from '../shared/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Define the Title for description panel
  headerData: string = "Home";
  descriptionData: string = "Home page description";

  // Default values for summary cards in the dashboard
  totalOrdersData: number = 345;
  totalExpensesData: number = 267;
  totalRevenueData: number = 345;
  newUsersCount: number = 345;

  homeDataSubscription: Subscription;
  blogPostList: Post[];

  //Inject the home data service to the constructor
  constructor(private homeService: HomeDataService) { }

  ngOnInit(): void {

    // Load the all posts from the remote end point
    this.homeDataSubscription = this.homeService.GetAllBlogPosts().subscribe((postList: Post[]) => {
      this.blogPostList = postList;
    });
  }

  ngOnDestroy(): void {

    //Destroy the homeDataSubscription instance
    this.homeDataSubscription.unsubscribe();
  }
}
