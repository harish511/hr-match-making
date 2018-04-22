import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  public userId: number;

  constructor(private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.userId = this.getRouteId('userId');
  }

  private getRouteId(name: string): number {
    return +this.activatedRoute.snapshot.paramMap.get(name);
  }

  public goBack() {
    this.location.back();
  }

}
