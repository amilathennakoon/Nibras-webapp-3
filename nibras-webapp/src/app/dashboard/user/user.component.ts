import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  headerData: string = "Users";
  totalUsers: string;

  userDataSubscription: Subscription;
  imagePath: string = "/assets/user.jpg";
  userList: User[];

  toggleActionValue: string;
  displayedColumns: string[] = ['imageUrl','name', 'email', 'phone'];

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {

    this.userDataSubscription = this.userDataService.GetUsers().subscribe((userList: User[]) => {

      this.userList = userList;
      this.totalUsers = `Total Users: ${this.userList.length}`;
    });
  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
  }

  toggleAction(event: string): void {
    this.toggleActionValue = event;
  }

}
