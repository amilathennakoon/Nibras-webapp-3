import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { UserComponent } from './user/user.component';
import { BlogsComponent } from './blogs/blogs.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    BlogsComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class DashboardModule { }
