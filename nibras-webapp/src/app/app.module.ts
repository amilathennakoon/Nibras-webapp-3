import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './dashboard/shared/components/shared/shared.module';
import { HomeServiceService } from './services/home-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule
  ],
  providers: [HomeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
