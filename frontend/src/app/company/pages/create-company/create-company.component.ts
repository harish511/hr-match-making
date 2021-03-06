import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CompanyService } from '../../../services/company.service';
import { Router } from '@angular/router';
import { Company } from '../../../models/company';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public states: string[] = ['New Jersey', 'New York', 'California', 'Florida'];
  public isSubmitted = false;

  // Form stuff
  public companyForm: FormGroup;

  constructor(private fb: FormBuilder,
    private companySerivice: CompanyService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      industry: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.compose([Validators.required, Validators.pattern(/(^\d{3}-\d{3}-\d{4}$)/)])],
      address: this.fb.group(
        {
          street: [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
          apt: [null,  Validators.compose([Validators.maxLength(10)])],
          zipcode: [null,
            Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern(/(^\d{5}$)|(^\d{5}-\d{4}$)/)])],
          city: [null, Validators.compose([Validators.required, Validators.maxLength(25)])],
          state: ['Choose...', Validators.required]
        }
      )
    });
  }

  /**
   * createCompany
   */
  public createCompany(): void {
    this.isSubmitted = true;

    if (this.isSubmitted) {
      const company: Company = this.companyForm.value;
      this.companySerivice.createCompany(company)
        .then(companyObj => {
            console.log(companyObj);
            this.router.navigate(['/dashboard']);
          });
    }
  }

   /* Form Getters */
  public get name(): FormControl {
    return this.companyForm.get('name') as FormControl;
  }

  public get description(): FormControl {
    return this.companyForm.get('description') as FormControl;
  }

  public get industry(): FormControl {
    return this.companyForm.get('industry') as FormControl;
  }

  public get email(): FormControl {
    return this.companyForm.get('email') as FormControl;
  }

  public get address(): FormGroup {
    return this.companyForm.get('address') as FormGroup;
  }

  public get street(): FormControl {
    return this.address.get('street') as FormControl;
  }

  public get apt(): FormControl {
    return this.address.get('apt') as FormControl;
  }

  public get city(): FormControl {
    return this.address.get('city') as FormControl;
  }

  public get state(): FormControl {
    return this.address.get('state') as FormControl;
  }

  public get zipcode(): FormControl {
    return this.companyForm.get('zipcode') as FormControl;
  }

  public get diagnostic() { return JSON.stringify(this.companyForm.value); }

}
