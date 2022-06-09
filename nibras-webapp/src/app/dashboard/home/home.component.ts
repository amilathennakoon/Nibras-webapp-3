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

  headerData: string = "Home";
  descriptionData: string = "Home page description";

  totalOrdersData: number = 345;
  totalExpensesData: number = 267;
  totalRevenueData: number = 345;
  newUsersCount: number = 345;

  homeDataSubscription: Subscription;

  blogPostList: Post[];

  constructor(private homeService: HomeDataService) { }

  ngOnInit(): void {

    this.homeDataSubscription = this.homeService.GetAllBlogPosts().subscribe((postList: Post[]) => {
      this.blogPostList = postList;
    });
  }

  ngOnDestroy(): void {

    this.homeDataSubscription.unsubscribe();
  }
}
