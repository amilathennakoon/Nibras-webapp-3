import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DescriptionComponent } from 'src/app/dashboard/shared/components/description/description.component';
import { SummaryCardComponent } from '../summary-card/summary-card.component';
import { RecentBlogsComponent } from '../recent-blogs/recent-blogs.component';


@NgModule({
  declarations: [DescriptionComponent, SummaryCardComponent,RecentBlogsComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [DescriptionComponent, SummaryCardComponent,RecentBlogsComponent]
})
export class SharedModule { }
