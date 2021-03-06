import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyDashboardRoutingModule } from './company-dashboard-routing.module';
import { CompanyDashboardComponent } from './company-dashboard.component';
import { JobPostComponent } from './pages/job-post/job-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { CompanyService } from '../../services/company.service';
import { ListJobpostComponent } from './pages/list-jobpost/list-jobpost.component';
import { ViewJobpostComponent } from './pages/view-jobpost/view-jobpost.component';
import { ApplicantsComponent } from './pages/applicants/applicants.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { JobApplicationService } from '../../services/job-application.service';
import { SharedModule } from '../../shared/shared.module';
import { ApplicantComponent } from './applicant/applicant.component';
import { EmployeeSearchComponent } from './pages/employee-search/employee-search.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyDashboardRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [CompanyDashboardComponent, JobPostComponent,
    ListJobpostComponent, ViewJobpostComponent, ApplicantsComponent,
    ApplicationsComponent,
    ApplicantComponent,
    EmployeeSearchComponent, ],
  providers: [JobService, CompanyService, JobApplicationService, ]
})
export class CompanyDashboardModule { }
