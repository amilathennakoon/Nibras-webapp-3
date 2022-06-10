import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './dashboard/shared/shared.module';
import { HomeDataService } from './services/homeData.service';
import { UserDataService } from './services/user-data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [HomeDataService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
