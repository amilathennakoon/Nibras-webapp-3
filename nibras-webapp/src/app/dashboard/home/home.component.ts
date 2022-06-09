import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}
