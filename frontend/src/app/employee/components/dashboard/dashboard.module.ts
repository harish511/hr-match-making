import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from './dashboard.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { JobService } from '../../../services/job.service';
import { BookmarkService } from '../../../services/bookmark.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [JobSearchComponent, DashboardComponent],
  providers: [JobService, BookmarkService],
})
export class DashboardModule { }
