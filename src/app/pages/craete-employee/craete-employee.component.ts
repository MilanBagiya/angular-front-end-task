import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-craete-employee',
  templateUrl: './craete-employee.component.html',
  styleUrls: ['./craete-employee.component.scss']
})
export class CraeteEmployeeComponent implements OnInit {
  userList
    : any;

  subs: Subscription;
  userForm: FormGroup;
  empolyee: any;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private statusService: StatusService,
    private router: Router) {


    this.subs = new Subscription();
    this.userForm = this.fb.group({
      name: [, [Validators.required]],
      salary: [, [Validators.required]],
      age: [, [Validators.required]],
      email: [''],
      country: [''],
      avatar: [''],
    });
  }

  ngOnInit(): void {
    this.getUserDetailsById(1);

    if (this.empolyee) {
      this.userForm.controls['name'].setValue(this.empolyee.name);
      this.userForm.controls['salary'].setValue(this.empolyee.salary);
      this.userForm.controls['age'].setValue(this.empolyee.age);
    }
  }


  getUserDetailsById(id: number) {
    if (this.userForm.valid) {
      this.subs.add(this.apiService.getEmployeeById(id).subscribe((response) => {
        if (response.message) {
          this.empolyee = response.data
          this.statusService.suceessStatus(response.message);
          this.router.navigateByUrl('/');
        }
        else {
          this.statusService.warningStatus(response.message ? response.message : 'Craete user failed');
        }
      })
      )
    }
  }

  saveUserDetails() {
    if (this.userForm.valid) {
      this.subs.add(this.apiService.craeteEmployee(this.userForm.value).subscribe((response) => {
        if (response.message) {
          this.statusService.suceessStatus(response.message);
          this.router.navigateByUrl('/');
        }
        else {
          this.statusService.warningStatus(response.message ? response.message : 'Craete user failed');
        }
      })
      )
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
